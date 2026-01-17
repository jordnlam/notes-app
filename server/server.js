const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Test route
app.get('/hello', (req, res) => {
        res.json({message: 'Hello from the server!' });
});

// Start server
app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
});