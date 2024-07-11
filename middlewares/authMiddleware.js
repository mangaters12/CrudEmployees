// middlewares/authMiddleware.js

const { User } = require('../models'); // Sesuaikan dengan struktur model Anda

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Authorization denied, token missing' });
  }

  try {
    // Misalnya, Anda dapat mengimplementasikan validasi token atau sesi di sini
    // Contoh validasi token sederhana tanpa JWT:
    const user = await User.findOne({ where: { token: token } });

    if (!user) {
      throw new Error('Invalid token');
    }

    req.user = user; // Tambahkan objek user ke dalam req untuk digunakan di rute
    next();
  } catch (error) {
    console.error('Authentication error:', error.message);
    res.status(401).json({ message: 'Authorization denied, invalid token' });
  }
};

module.exports = authMiddleware;
