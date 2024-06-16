import express from "express";
const router = express.Router();
import { create, index, show, update } from "../Controllers/Album.js";
import { Auth } from "../Controllers/Admin.js";

router.get("/", index);
router.post("/", Auth, create);
router.get("/:id", Auth, show);
router.put("/:id", Auth, update);
router.delete("/:id", Auth, update);

export default router;
