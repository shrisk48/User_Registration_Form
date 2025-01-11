const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); 
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true })); 
app.use(bodyParser.json());


app.use('/api/auth', authRoutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
