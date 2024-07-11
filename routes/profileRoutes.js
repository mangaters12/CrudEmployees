// routes/profileRoutes.js

const express = require('express');
const router = express.Router();
const { User } = require('../models'); // Sesuaikan dengan struktur model Anda
const authMiddleware = require('../middlewares/authMiddleware'); // Import middleware autentikasi

// GET profile
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id; // Mengambil ID pengguna dari req setelah autentikasi
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'User profile not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Error retrieving profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
