// const express = require('express');
// const router = express.Router();

// const users = [
//     { id: 1, email: 'user1@example.com', password: 'password1' },
//     { id: 2, email: 'user2@example.com', password: 'password2' }
// ];

// router.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     const user = users.find(u => u.email === email && u.password === password);

//     if (user) {
//         return res.json({ success: true, message: 'Login successful', userId: user.id });
//     } else {
//         return res.status(401).json({ success: false, message: 'Invalid credentials' });
//     }
// });

// module.exports = router;
// auth.js

const express = require('express');
const router = express.Router();

// Mock user database
const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' }
];

// Endpoint for user login
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if the username and password are provided
    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Username and password are required' });
    }

    // Find user by username and password
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Authentication successful
        return res.json({ success: true, message: 'Login successful', userId: user.id });
    } else {
        // Authentication failed
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

module.exports = router;
