require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const cors = require("cors");
const router = require("./routes/router");

const port = process.env.PORT || 8009;

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json("server start");
})

app.use(router);

app.listen(port, () => {
    console.log(`server is start port number ${port}`);
});