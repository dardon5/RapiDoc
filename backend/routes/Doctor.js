import express from "express";
import {
  getDoctors,
  createDoctor,
  updateDoctor,
  deleteDoctor,
} from "../controllers/DoctorController.js";

const router = express.Router();

//GET
router.get("/", getDoctors);
//CREATE
router.post("/", createDoctor);
//UPDATE
router.patch("/:id", updateDoctor);
//DELETE
router.delete("/:id", deleteDoctor);

export default router;
