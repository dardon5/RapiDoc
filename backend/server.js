import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import AuthRoute from "./routes/User.js";
import DoctorRoute from "./routes/Doctor.js";
import AppointmentRoute from "./routes/Appointment.js";

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
app.use("/api/authentication", AuthRoute);
app.use("/api/appointment", AppointmentRoute);
app.use("/api/doctor", DoctorRoute);

app.listen(PORT, () => {
  connect();
  console.log("Backend connection established");
});
