const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    erno: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const students = new mongoose.model("students", studentSchema);

module.exports = students;
