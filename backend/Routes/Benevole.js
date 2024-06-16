import express from "express";
const router = express.Router();
import { signup, login, Auth } from "../Controllers/Benevole.js";

router.post("/signup", signup);
router.post("/login", login);
router.get("/auth", Auth);

export default router;
