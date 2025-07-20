import express from "express";
import { createContactUsMessage, getAllContactUsMessages } from "../../controllers/ContactUs/ContactUs.js";

const router = express.Router();

router.post("/contact-us", createContactUsMessage);
router.get("/contact-us", getAllContactUsMessages);

export default router;
