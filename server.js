const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

// Importing routers for authentication, credit management, and service management
const authRouter = require('./auth');
const creditRouter = require('./credit');
const serviceRouter = require('./service');

// Middleware to parse incoming JSON data
app.use(express.json());

// Routes for authentication, credit management, and service management
app.use('/auth', authRouter);
app.use('/credits', creditRouter);
app.use('/services', serviceRouter);

// app.post("/services")
// res.send("hellow");
// Start the server

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
