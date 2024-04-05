// const express = require('express');
// const router = express.Router();

// const services = [
//     { id: 1, name: 'Service A' },
//     { id: 2, name: 'Service B' }
// ];

// router.get('/', (req, res) => {
//     return res.json({ services });
// });

// module.exports = router;


// service.js

const express = require('express');
const router = express.Router();

const services = [
    { id: 1, name: 'Service A', cost: 10 },
    { id: 2, name: 'Service B', cost: 20 }
];

// Endpoint to retrieve available services
router.get('/', (req, res) => {
    return res.json({ services });
});

module.exports = router;
