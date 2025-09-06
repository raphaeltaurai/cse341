const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const professionalRoutes  = require('./routes/professional');
const app = express();
const {MongoClient} = require('mongodb');
require('dotenv').config();


app.use(bodyParser.json());

// Serve static files from the frontend directory
//app.use(express.static(path.join(__dirname, '../frontend')));

app.use((req,res, next) => {
res.setHeader("Access-Control-Allow-Origin", "*");
next();
});

// MongoDB connection
let db;

MongoClient.connect(process.env.MONGODB_URI)
  .then(client => {
    console.log('Connected to MongoDB');
    db = client.db(process.env.MONGODB_DB);
    // Make db available to other modules
    app.locals.db = db;
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

app.use('/professional', professionalRoutes);

app.listen(8080);