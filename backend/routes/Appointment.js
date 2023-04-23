import express from "express";
import {
  createAppointment,
  getAppointments,
  getAppointment,
  updateAppointment,
  deleteAppointment,
} from "../controllers/AppointmentController.js";

const router = express.Router();

router.route("/").get(getAppointments).post(createAppointment);

router
  .route("/:id")
  .get(getAppointment)
  .put(updateAppointment)
  .delete(deleteAppointment);

export default router;
