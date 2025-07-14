const express = require('express');
const bodyParser = require('body-parser');

const professionalRoutes  = require('./routes/professionalRoutes');

const app = express();

app.use(bodyParser.json());

app.use((req,res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
next();
});

app.use('professionals', professionalRoutes);

app.listen(8080);