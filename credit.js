// const express = require('express');
// const router = express.Router();

// const userCredits = {};

// router.get('/:userId', (req, res) => {
//     const userId = parseInt(req.params.userId);
//     const credits = userCredits[userId] || 0;
//     return res.json({ credits });
// });

// router.post('/purchase', (req, res) => {
//     const { userId, amount } = req.body;
//     userCredits[userId] = (userCredits[userId] || 0) + amount;
//     return res.json({ success: true, message: 'Credits purchased successfully' });
// });

// module.exports = router;
// credit.js

const express = require('express');
const router = express.Router();

let userCredits = {}; // Object to store user credit scores

// Middleware to check user's credit before accessing services
router.use((req, res, next) => {
    const { userId } = req.body;
    if (!userCredits[userId]) {
        userCredits[userId] = 0;
         // Initialize user's credit score if not exists
    }
    next();
});

// Endpoint to check user's credit score
router.get('/:userId', (req, res) => {
    const { userId } = req.params;
    const credits = userCredits[userId];
    return res.json({ credits });
});

// Endpoint to deduct credits when user uses services
router.post('/use', (req, res) => {
    const { userId, amount } = req.body;
    if (userCredits[userId] >= amount) {
        userCredits[userId] -= amount;
        return res.json({ success: true, message: 'Credits deducted successfully' });
    } else {
        return res.status(400).json({ success: false, message: 'Insufficient credits' });
    }
});

module.exports = router;
