const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const personRoutes = require('./routes/personRoutes');

dotenv.config(); // Load environment variables

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/person', personRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(3000, () => {
        console.log('🚀 Server running on http://localhost:3000');
    });
})
.catch((err) => {
    console.error('❌ Error connecting to MongoDB:', err);
});
