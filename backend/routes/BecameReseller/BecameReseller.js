import express from 'express';
import upload from '../../middleware/upload.js';
import { createReseller, getAllResellers } from "../../controllers/BecameReseller/BecameReseller.js";

const router = express.Router();

// ✅ Match frontend POST request to /api/resellers
router.post("/resellers", upload.single("productImage"), createReseller);
router.get("/resellers", getAllResellers);

export default router;
