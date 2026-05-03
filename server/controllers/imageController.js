import userModels from "../models/userModels.js";
import axios from "axios";

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

        // Make API request to ClipDrop
        const response = await axios.post(
            'https://clipdrop-api.co/text-to-image/v1',
            { prompt },
            {
                headers: {
                    'x-api-key': process.env.CLIPDROP_API,
                    'Content-Type': 'application/json'
                },
                responseType: 'arraybuffer'
            }
        );

        // Convert response to base64
        const base64Image = Buffer.from(response.data, 'binary').toString('base64');
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
        console.error('Error generating image:', error.response?.data || error.message);
        res.status(500).json({ 
            success: false, 
            message: 'Server Error',
            error: error.response?.data || error.message 
        });
    }
};
