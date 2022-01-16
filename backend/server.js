const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

///Import Routes Here
const authRoute = require("./routes/auth");
const homeRoute = require("./routes/home");
const profileRoute = require("./routes/profile");


dotenv.config();

//connect to db
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("connected to db")
);

//mw
app.use(cors());
app.use(express.json());

//Route mws
app.use("/api/user", authRoute);
app.use("/api/home", homeRoute);
// app.use("/api/profile", profileRoute);


app.listen(8000, () => console.log("Server running"));
