import express from "express";
import {
  createAppointment,
  getAppointments,
  getAppointment,
  updateAppointment,
  deleteAppointment,
} from "../controllers/AppointmentController.js";

const router = express.Router();

router.get("/", getAppointments);
router.post("/", createAppointment);
router.get("/:id", getAppointment);
router.put("/:id", updateAppointment);
router.delete("/:id", deleteAppointment);

export default router;
