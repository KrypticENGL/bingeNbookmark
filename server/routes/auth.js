import express from 'express';
import { authenticate } from '../middleware/auth.js';
import { getUserProfile, updateUserProfile } from '../controllers/authController.js';

const router = express.Router();

router.get('/profile', authenticate, getUserProfile);
router.put('/profile', authenticate, updateUserProfile);

export default router;
