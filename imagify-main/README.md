# Imagify - Text to Image Generation Platform  
Imagify is a modern web application that transforms text descriptions into stunning images using AI technology. Built with a robust tech stack and user-friendly interface, it provides a seamless experience for generating AI-powered images....
> ⚙️ **Note:** This is a **local desktop web application**. Follow the steps below to run it in your **local browser**.
  

![Imagify Preview](client/src/assets/sample_img_1.png)

## 🌟 Features

- **Text-to-Image Generation**: Transform text descriptions into high-quality images
- **User Authentication**: Secure login and registration system
- **Credit System**: Manage image generation credits
- **Responsive Design**: Works seamlessly on all devices
- **Modern UI**: Beautiful animations and transitions
- **Real-time Updates**: Instant feedback on image generation

## 🛠️ Tech Stack

### Frontend
- **Core**: React.js, Vite
- **Styling**: TailwindCSS, Framer Motion
- **Routing**: React Router DOM
- **State Management**: React Context API
- **HTTP Client**: Axios
- **UI Components**: React Toastify

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT, Bcryptjs
- **API Integration**: ClipDrop API
- **Security**: CORS, Environment Variables

### Development & Deployment
- **Version Control**: Git
- **Hosting**: Vercel
- **Database**: MongoDB Atlas
- **Development Tools**: Nodemon, ESLint

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- ClipDrop API Key

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/imagify.git
cd imagify
```

2. **Install Frontend Dependencies**
```bash
cd client
npm install
```

3. **Install Backend Dependencies**
```bash
cd ../server
npm install
```

4. **Environment Setup**

Create `.env` file in the server directory:
```env
CLIPDROP_API=your_clipdrop_api_key
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Create `.env` file in the client directory:
```env
VITE_BACKEND_URL=http://localhost:5000
```

5. **Start Development Servers**

Backend:
```bash
cd server
npm run dev
```

Frontend:
```bash
cd client
npm run dev
```

## 📁 Project Structure
```
Imagify/
├── client/                 # Frontend React application
│   ├── src/               # Source code
│   ├── public/            # Static files
│   └── package.json       # Frontend dependencies
├── server/                # Backend Node.js application
│   ├── controllers/       # Route controllers
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   └── package.json      # Backend dependencies
├── vercel.json           # Vercel deployment config
└── .gitignore           # Git ignore rules
```

## 🔑 API Endpoints

### Authentication
- `POST /api/user/register` - Register new user
- `POST /api/user/login` - User login
- `GET /api/user/credits` - Get user credits

### Image Generation
- `POST /api/image/generate-image` - Generate image from text

## 🚀 Deployment

The application is configured for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set up environment variables in Vercel dashboard
4. Deploy!

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Kejal Jain - Initial work

## 🙏 Acknowledgments

- ClipDrop API for image generation
- Vercel for hosting
- MongoDB Atlas for database hosting 
