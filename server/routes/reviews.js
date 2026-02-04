import express from 'express';
import { authenticate } from '../middleware/auth.js';
import {
    getAllReviews,
    getReviewById,
    createReview,
    updateReview,
    deleteReview
} from '../controllers/reviewController.js';

const router = express.Router();

router.get('/', getAllReviews);
router.get('/:id', getReviewById);
router.post('/', authenticate, createReview);
router.put('/:id', authenticate, updateReview);
router.delete('/:id', authenticate, deleteReview);

export default router;
