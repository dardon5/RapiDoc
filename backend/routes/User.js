import express from "express";
import {
  createUser,
  updateUser,
  deleteUser,
  getUser,
} from "../controllers/UserController.js";

const router = express.Router();

//CREATE
router.post("/", createUser);
//UPDATE
router.put("/:id", updateUser);
//DELETE
router.delete("/:id", deleteUser);
//GET
router.get("/", getUser);

export default router;
