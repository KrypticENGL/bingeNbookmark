import User from '../models/User.js';

export const getUserProfile = async (req, res) => {
    try {
        let user = await User.findOne({ firebaseUid: req.user.uid });

        if (!user) {
            user = await User.create({
                firebaseUid: req.user.uid,
                email: req.user.email,
                displayName: req.user.name
            });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateUserProfile = async (req, res) => {
    try {
        const { displayName, profilePicture } = req.body;

        const user = await User.findOneAndUpdate(
            { firebaseUid: req.user.uid },
            { displayName, profilePicture },
            { new: true, runValidators: true }
        );

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
