const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Please enter a type for your exercise."
        },
        name: {
            type: String,
            trim: true,
            required: "Please enter a name for your exercise."
        },
        distance: {
            type: Number,
        },
        duration: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number, 
        }
    }]

});


const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;