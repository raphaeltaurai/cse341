const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const professionalRoutes  = require('./routes/professional');
const app = express();
require('dotenv').config();
const database = require('./db/database');

app.use(bodyParser.json());

// Serve static files from the frontend directory
//app.use(express.static(path.join(__dirname, '../frontend')));

app.use((req,res, next) => {
res.setHeader("Access-Control-Allow-Origin", "*");
next();
});

// Initialize database connection
database.connectToMongoDB()
    .then(db => {
        app.locals.db = db;
    })
    .catch(err => {
        console.error('Failed to connect to database:', err);
    });

app.use('/professional', professionalRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {console.log(`Server is running on http://localhost:${PORT}`); });