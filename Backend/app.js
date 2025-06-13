require('dotenv').config();
const express = require('express')
const cors = require('cors');
const app = express();

app.use(cors());

app.get("/", (req, res)=>{
    console.log("Home Page");
    res.send("HonmePage");
})


module.exports = app;