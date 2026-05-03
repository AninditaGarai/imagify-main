const axios = require('axios');
require('dotenv').config();

async function testClipDropAPI() {
    try {
        console.log('Testing ClipDrop API...');
        console.log('API Key:', process.env.CLIPDROP_API ? 'Present' : 'Missing');
        
        const response = await axios.post(
            'https://clipdrop-api.co/text-to-image/v1',
            {
                prompt: 'a beautiful sunset over mountains'
            },
            {
                headers: {
                    'x-api-key': process.env.CLIPDROP_API,
                    'Content-Type': 'application/json'
                },
                responseType: 'arraybuffer'
            }
        );

        console.log('API Response Status:', response.status);
        console.log('API Response Headers:', response.headers);
        console.log('API Test Successful!');
    } catch (error) {
        console.error('API Test Failed!');
        console.error('Error Status:', error.response?.status);
        console.error('Error Headers:', error.response?.headers);
        console.error('Error Data:', error.response?.data);
        console.error('Full Error:', error.message);
    }
}

testClipDropAPI(); 