import userModels from "../models/userModels.js";
import axios from "axios";

const generateWithClipdrop = async (prompt) => {
    const response = await axios.post(
        "https://clipdrop-api.co/text-to-image/v1",
        { prompt },
        {
            headers: {
                "x-api-key": process.env.CLIPDROP_API,
                "Content-Type": "application/json"
            },
            responseType: "arraybuffer"
        }
    );

    return response.data;
};

const generateWithFallback = async (prompt) => {
    const fallbackUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`;
    const response = await axios.get(fallbackUrl, { responseType: "arraybuffer" });
    return response.data;
};

export const generateImage = async (req, res) => {
    try {
        const { userId, prompt } = req.body;

        // Validate user and prompt
        const user = await userModels.findById(userId);
        if (!user) return res.json({ success: false, message: 'User not found' });
        if (!prompt) return res.json({ success: false, message: 'Prompt is required' });

        // Check credit balance
        if (user.creditBalance <= 0) {
            return res.json({ success: false, message: 'Insufficient Credits', creditBalance: user.creditBalance });
        }

        let imageBuffer;
        if (process.env.CLIPDROP_API) {
            try {
                imageBuffer = await generateWithClipdrop(prompt);
            } catch (clipdropError) {
                console.warn("ClipDrop generation failed, using fallback provider:", clipdropError.response?.status || clipdropError.message);
                imageBuffer = await generateWithFallback(prompt);
            }
        } else {
            imageBuffer = await generateWithFallback(prompt);
        }

        // Convert response to base64
        const base64Image = Buffer.from(imageBuffer, 'binary').toString('base64');
        const resultImage = `data:image/png;base64,${base64Image}`;

        // Deduct credit and return updated balance
        const updatedUser = await userModels.findByIdAndUpdate(
            user._id, 
            { $inc: { creditBalance: -1 } },
            { new: true }
        );

        res.json({ 
            success: true, 
            message: 'Image Generated', 
            creditBalance: updatedUser.creditBalance, 
            resultImage 
        });
    }
    catch (error) {
        const statusCode = error.response?.status || 500;
        const upstreamMessage = typeof error.response?.data === "string"
            ? error.response.data
            : error.response?.data?.message;
        const message = upstreamMessage || error.message || "Image generation failed";

        console.error("Error generating image:", message);
        res.status(statusCode).json({
            success: false,
            message
        });
    }
};
