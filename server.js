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
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + "./index.html"));
});

//render route for /exercise
router.get('/exercise', (req, res) =>{
    res.sendFile(path.join(__dirname + "./exercise.html"));
});

//render route for /stats
router.get('/stats', (req, res) =>{
    res.sendFile(path.join(__dirname + "./stats.html"));
});

//get route for combined weight of multiple exercises

//get route for total duration of each workout

//post or put route for adding new exercise to new workout

//post or put route for adding new exercise to most recent workout

























app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });