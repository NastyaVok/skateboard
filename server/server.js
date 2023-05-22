const express = require('express');
const cors = require('cors');
const { connectToDb, getDb } = require('./db');
const url = require('url'); 
const { request } = require('http');

const PORT = 8080;

const app = express();
app.use(cors());

let db;

connectToDb((err) => {
    if (!err) {
        app.listen(PORT, (err) => {
            err ? console.log(err) : console.log(`Listening port ${PORT}`);
        });
        db = getDb();
    } else {
        console.log(`DB connection error: ${err}`);
    }
});

app.get('/skateboards',(req, res) => {
    const skateboards = [];
    let urlRequest = url.parse(req.url, true); 
    let numId = urlRequest.query.id;
    let numSkate;

    if (urlRequest.pathname == urlRequest.path) {
        console.log('showAll')
    } else {
        console.log('find skateboard id=num')
        numSkate = {id:numId};
    };
    
    db
    .collection('skateboards')
    .find(numSkate)
    .forEach((skateboard) => { 
        skateboards.push(skateboard);
    })
    .then(() => {
        res
        .status(200)
        .json(skateboards);
    })
});