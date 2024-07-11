// controllers/ProfileController.js

const { User } = require('../models'); // Sesuaikan dengan struktur model Anda

exports.getProfile = async (req, res) => {
  try {
    const userId = req.user.id; // Misalkan ada middleware untuk mengatur req.user
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'User profile not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Error retrieving profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
