require('dotenv').config();
const express = require('express')
const cors = require('cors');
const cookieParser = require("cookie-parser");
const app = express();
const connectToDb = require("./db/db")
const userRouter = require("./routes/user.routes");


//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

//connect to mongoDb
connectToDb();

app.get("/", (req, res)=>{
    console.log("Home Page");
    res.send("HonmePage");
})

app.use('/users', userRouter);


module.exports = app;