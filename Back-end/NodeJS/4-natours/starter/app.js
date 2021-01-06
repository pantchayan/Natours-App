// Modules ======================================
const express = require('express');
const app = express();
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');

const userRouter = require('./routes/userRoutes');

// Middlewares =====================================

app.use(morgan('dev'));
app.use(express.json());

// Routes ====================================

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);


module.exports = app;