const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const professionalRoutes  = require('./routes/professional');

const app = express();

app.use(bodyParser.json());

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../frontend')));

app.use((req,res, next) => {
res.setHeader("Access-Control-Allow-Origin", "*");
next();
});

app.use('/professional', professionalRoutes);

app.listen(8800);