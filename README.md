# Review Website

A full-stack review website built with modern web technologies.

## Tech Stack

### Frontend
- **Vite** - Fast build tool and dev server
- **React** - UI library
- **React Router** - Client-side routing
- **Firebase** - Authentication
- **Axios** - HTTP client

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Firebase Admin SDK** - Token verification

## Project Structure

```
review-website/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── context/     # React Context providers
│   │   ├── services/    # API services
│   │   ├── config/      # Configuration files
│   │   └── App.jsx      # Main app component
│   └── package.json
├── server/              # Node.js backend
│   ├── config/          # Database & Firebase config
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Custom middleware
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   └── server.js        # Server entry point
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Firebase project

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd review-website
```

### 2. Install Dependencies

**Client:**
```bash
cd client
npm install
```

**Server:**
```bash
cd ../server
npm install
```

### 3. Environment Variables

#### Client (.env)
Create `client/.env` file:
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_API_URL=http://localhost:5000/api
```

#### Server (.env)
Create `server/.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/review-website
# or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/review-website

# Firebase Admin SDK
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour-Private-Key\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com

NODE_ENV=development
```

### 4. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project (or use existing)
3. Enable **Authentication** → **Email/Password** sign-in method
4. Get your web app config (Project Settings → Your apps → Web app)
5. For backend, download service account key:
   - Project Settings → Service Accounts → Generate new private key
   - Extract the values for `FIREBASE_PROJECT_ID`, `FIREBASE_PRIVATE_KEY`, and `FIREBASE_CLIENT_EMAIL`

### 5. MongoDB Setup

**Option A: Local MongoDB**
- Install MongoDB locally
- Start MongoDB service
- Use: `MONGODB_URI=mongodb://localhost:27017/review-website`

**Option B: MongoDB Atlas (Cloud)**
1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Click "Connect" → "Connect your application"
4. Copy connection string to `MONGODB_URI`

### 6. Run Development Servers

**Terminal 1 (Client):**
```bash
cd client
npm run dev
```
Frontend will run on `http://localhost:5173`

**Terminal 2 (Server):**
```bash
cd server
npm run dev
```
Backend will run on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)

### Reviews
- `GET /api/reviews` - Get all reviews
- `GET /api/reviews/:id` - Get single review
- `POST /api/reviews` - Create review (protected)
- `PUT /api/reviews/:id` - Update review (protected)
- `DELETE /api/reviews/:id` - Delete review (protected)

## Next Steps

1. ✅ Set up environment variables
2. ✅ Configure Firebase and MongoDB
3. 🔨 Customize the UI components
4. 🔨 Add more models and routes as needed
5. 🔨 Implement business logic
6. 🔨 Add validation and error handling
7. 🔨 Deploy to production

## Development Notes

- All reusable UI components (buttons, inputs, cards, etc.) are in `client/src/components/`
- Protected routes require authentication
- Backend uses Firebase Admin SDK to verify tokens
- MongoDB models use Mongoose schemas

## License

MIT
