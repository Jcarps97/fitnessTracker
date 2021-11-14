const path = require('path');
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// const router = require("express").router()

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });

app.use(express.static("public"));

//render route for /index
// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname + "./index.html"));
// });

//render route for /exercise
app.get('/exercise', (req, res) =>{
    res.sendFile(path.join(__dirname + "/public/exercise.html"));
});

//render route for /stats
app.get('/stats', (req, res) =>{
    res.sendFile(path.join(__dirname + "/public/stats.html"));
});

//get route for all workouts
app.get("/api/workouts", (req, res)=> {
    console.log("View workouts route hits")
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err)
    })
    console.log("View workouts route completes")
})

//get route for range5

//get route for total duration of each workout


//post route for adding new workout
app.post('/api/workouts', (req, res) => {
    console.log("New workout route hits")
    db.Workout.create(req.body)
    .then(resp => {
        res.json(resp)
        console.log(resp)
        console.log("New workout route completes")
    })
    .catch(err => {
        res.json(err)
    })
});

//post or put route for adding new exercise to most recent workout
app.put('/api/workouts/:id', (req, res) => {
    db.Workout.findByIdAndUpdate({_id: req.params.id}, { $push: { exercises: req.body } }, { new: true })
        .then(updated => {
            res.json(updated);
        })
        .catch(err => {
            res.json(err);
        });
})
























app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });