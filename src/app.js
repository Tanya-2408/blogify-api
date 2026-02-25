require('dotenv').config(); // 🔥 MUST BE FIRST

const express = require('express');
const app = express();

const authRoutes = require('./routes/auth.routes');
const uploadRoutes = require('./routes/upload.routes');

const errorHandler = require('./middlewares/error.middleware');
const notFound = require('./middlewares/notFound');

// Body parser
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/upload', uploadRoutes);

// 404
app.use(notFound);

// Global error handler
app.use(errorHandler);

module.exports = app;
