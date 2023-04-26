import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import AuthRoute from "./routes/User.js";
import DoctorRoute from "./routes/Doctor.js";
import AppointmentRoute from "./routes/Appointment.js";
import session from "express-session";

dotenv.config();

const app = express();
const PORT = process.env.port || 9000;

//Initial connection to mongodb using mongoose
const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});

//Middlewares

//helps to handle and respond to errors consistently across the entire application (error handling middleware)
//next is go to next middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(500).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/api/user", (req, res, next) => {
  const userId = req.session.userId;
  if (!userId) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  return res.status(200).json({ success: true, userId });
});

app.use("/api/authentication", AuthRoute);
app.use("/api/appointment", AppointmentRoute);
app.use("/api/doctor", DoctorRoute);

app.listen(PORT, () => {
  connect();
  console.log("Backend connection established");
});
