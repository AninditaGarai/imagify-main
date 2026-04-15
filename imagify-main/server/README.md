# Imagify Server

This is the backend server for the Imagify application, a text-to-image generation service.

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```
CLIPDROP_API=your_clipdrop_api_key
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

3. Start the development server:
```bash
npm run dev
```

## API Endpoints

- POST `/api/image/generate-image`: Generate an image from text
  - Requires authentication
  - Body: `{ userId: string, prompt: string }`

## Dependencies

All required dependencies are listed in `requirements.txt`. Install them using:
```bash
npm install
```

## Environment Variables

- `CLIPDROP_API`: Your ClipDrop API key
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token generation 