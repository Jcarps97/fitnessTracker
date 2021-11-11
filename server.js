const path = require('path');
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//render route for /index
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + "./index.html"));
});

//render route for /exercise
app.get('/exercise', (req, res) =>{
    res.sendFile(path.join(__dirname + "/public/exercise.html"));
});

//render route for /stats
app.get('/stats', (req, res) =>{
    res.sendFile(path.join(__dirname + "/public/stats.html"));
});

//get route for combined weight of multiple exercises

//get route for total duration of each workout

//post or put route for adding new exercise to new workout

//post or put route for adding new exercise to most recent workout

























app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });