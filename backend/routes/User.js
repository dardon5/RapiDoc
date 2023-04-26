import express from "express";
import { login, register } from "../controllers/AuthController.js";
import { updateUser, getUser } from "../controllers/UserController.js";

const router = express.Router();

//LOGIN
router.post("/login", login);
//REGISTER
router.post("/register", register);
//GET
router.get("/", getUser);
//UPDATE
router.put("/:id", updateUser);

export default router;
