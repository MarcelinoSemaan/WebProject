const express = require('express');
const dotenv = require('dotenv');
const campusOfficeRoute = require('./routes/campusOfficeRoute');

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Parses incoming JSON requests

// Routes
app.use('/api/campusOffice', campusOfficeRoute);

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the User API');
});

// 404 Handler
app.use((req, res, next) => {
    res.status(404).json({ message: 'Endpoint not found' });
});

// Error Handler
app.use((err, req, res, next) => {
    console.error('Unhandled Error:', err);
    res.status(500).json({ message: 'Internal server error' });
});

// Start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
