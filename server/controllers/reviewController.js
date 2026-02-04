import Review from '../models/Review.js';
import User from '../models/User.js';

export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find()
            .populate('userId', 'displayName email')
            .sort({ createdAt: -1 });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id)
            .populate('userId', 'displayName email');

        if (!review) {
            return res.status(404).json({ error: 'Review not found' });
        }

        res.json(review);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createReview = async (req, res) => {
    try {
        const { title, content, rating, category, tags } = req.body;

        // Find or create user
        let user = await User.findOne({ firebaseUid: req.user.uid });
        if (!user) {
            user = await User.create({
                firebaseUid: req.user.uid,
                email: req.user.email,
                displayName: req.user.name
            });
        }

        const review = await Review.create({
            userId: user._id,
            firebaseUid: req.user.uid,
            title,
            content,
            rating,
            category,
            tags
        });

        res.status(201).json(review);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);

        if (!review) {
            return res.status(404).json({ error: 'Review not found' });
        }

        if (review.firebaseUid !== req.user.uid) {
            return res.status(403).json({ error: 'Unauthorized' });
        }

        const updatedReview = await Review.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.json(updatedReview);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);

        if (!review) {
            return res.status(404).json({ error: 'Review not found' });
        }

        if (review.firebaseUid !== req.user.uid) {
            return res.status(403).json({ error: 'Unauthorized' });
        }

        await Review.findByIdAndDelete(req.params.id);
        res.json({ message: 'Review deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
