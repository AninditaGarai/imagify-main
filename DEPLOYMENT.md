# Imagify Deployment Guide

## Prerequisites
- Node.js 16+ installed
- MongoDB Atlas account (for database)
- Razorpay account (for payments)
- ClipDrop API key (for image generation)
- Vercel account (for deployment)

## Environment Setup

### Backend Setup
1. Navigate to `server` directory
2. Create `.env` file from `.env.example`
3. Fill in your API keys and database credentials:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   RAZORPAY_KEY_ID=your_key
   RAZORPAY_KEY_SECRET=your_secret
   CLIPDROP_API=your_api_key
   PORT=4000
   ```

### Frontend Setup
1. Navigate to `client` directory
2. Create `.env.local` file from `.env.example`
3. Configure:
   ```
   VITE_BACKEND_URL=http://localhost:4000
   VITE_RAZORPAY_KEY_ID=your_public_key
   ```

## Local Development
```bash
# Start Backend
cd server
npm install
npm run start

# Start Frontend (in another terminal)
cd client
npm install
npm run dev
```

App will be available at `http://localhost:5173/`

## Vercel Deployment

The project uses Vercel's multi-root setup with:
- Backend: Node.js serverless functions at `/api/*`
- Frontend: Static Vite build at root

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Vercel will automatically:
   - Build the frontend (`npm run build` in client)
   - Deploy the backend serverless functions
   - Route `/api/*` to backend, everything else to frontend

## Features
- AI Text-to-Image Generation using ClipDrop API
- User Authentication with JWT
- Razorpay Payment Integration
- Credit-based System
- Responsive Design with Tailwind CSS
- Real-time Image Generation

## Credits
Developed by Anindita Garai
