// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profileRoutes'); // Import profile routes
const biodataRoutes = require('./routes/biodata'); // Import biodata routes
const userRoutes = require('./routes/users'); // Import biodata routes
const biodataRoutes = require('./routes/biodata'); // Import biodata routes


const app = express();

app.use(bodyParser.json());
app.use(cors());

// Use auth routes for authentication endpoints
app.use('/api/users/', userRoutes);

// Use auth routes for authentication endpoints
app.use('/api/auth', authRoutes);

// Use profile routes for profile endpoints
app.use('/api/profileRoutes', profileRoutes);

// Use biodata routes for biodata endpoints
app.use('/api/biodata', biodataRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Database connected');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
