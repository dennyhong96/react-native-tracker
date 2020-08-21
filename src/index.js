require("dotenv").config({ path: `${__dirname}/config/config.env` });
const express = require("express");
const morgan = require("morgan");

const connectDB = require("./config/db");
const authRouter = require("./routers/auth");
const trackRouter = require("./routers/track");

const app = express();

connectDB();

app.use(express.json());
app.use(morgan("dev"));
app.use("/auth", authRouter);
app.use("/tracks", trackRouter);

app.listen(5000, () => console.log("Server up on port 5000..."));
