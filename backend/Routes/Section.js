import express from "express";
const router = express.Router();
import {
  create,
  getSectionAdmin,
  index,
  show,
  update,
} from "../Controllers/Section.js";
import { Auth } from "../Controllers/Admin.js";

router.get("/", index);
router.post("/", Auth, create);
router.get("/:id", Auth, show);
router.put("/:id", Auth, update);
router.delete("/:id", Auth, update);
router.get("/getSection", Auth, getSectionAdmin);

export default router;
