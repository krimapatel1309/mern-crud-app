const express = require("express");
const router = express.Router();
const studentSchema = require("../models/studentSchema");

// router.get("/",(req,res)=>{
//     console.log("connect");
// });

// register user

router.post("/register", async (req, res) => {
    // console.log(req.body);
    const { erno, name, mobile } = req.body;

    if (!erno || !name || !mobile) {
        res.status(422).json("plz fill the data");
    }

    try {
        const preuser = await studentSchema.findOne({ erno });
        // console.log(preuser);

        if (preuser) {
            res.status(409).json("this is user is already present");
        } else {
            const adduser = new studentSchema({
                erno,
                name,
                mobile,
            });

            await adduser.save();
            res.status(201).json(adduser);
            // console.log(adduser);
        }
    } catch (error) {
        res.status(422).json(error);
    }
});

// get userdata

router.get("/getdata", async (req, res) => {
    try {
        const userdata = await studentSchema.find();
        res.status(201).json(userdata);
        // console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
});

// get individual user

router.get("/getuser/:id", async (req, res) => {
    try {
        // console.log(req.params);
        const { id } = req.params;

        const userindividual = await studentSchema.findById({ _id: id });
        // console.log(userindividual);
        res.status(201).json(userindividual);
    } catch (error) {
        res.status(422).json(error);
    }
});

// update user data

router.patch("/updateuser/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const updateduser = await studentSchema.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
            }
        );

        // console.log(updateduser);
        res.status(201).json(updateduser);
    } catch (error) {
        res.status(422).json(error);
    }
});

// delete user
router.delete("/deleteuser/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const deletuser = await studentSchema.findByIdAndDelete({ _id: id });
        // console.log(deletuser);
        res.status(201).json(deletuser);
    } catch (error) {
        res.status(422).json(error);
    }
});

module.exports = router;
