import express from "express";
import multer from "multer";
import { home, postFile, read } from "./controller";

const router = express.Router();
const upload = multer();

router.get("/", home);
router.post("/", upload.single("file"), postFile);
router.get("/read", read);

export default router;
