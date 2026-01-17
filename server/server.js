const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory storage (temporary - resets when server restarts)
let notes = [];

// GET all notes
app.get('/notes', (req, res) => {
        res.json(notes);
});

// POST a new note
app.get('/notes', (req, res) => {
        res.json(notes);
});

// POST a new note
app.post('/notes', (req, res) => {
        // Get note data from request
        const note = req.body;
        // Add to array
        notes.push(note);
        res.json({ message: 'Note saved!', note: note });
});

// Start server
app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
});