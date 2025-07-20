// routes/uploadRoute.js
import express from 'express';
import upload from '../middleware/upload.js';
import { uploadToCloudinary } from '../controllers/uploadController.js';
import authenticateJWT from '../middleware/auth.js';

const router = express.Router();

// GET: Check if the route is working
router.get('/upload', authenticateJWT, (req, res) => {
    res.status(200).json({ message: 'Upload route is working' });
});

// POST: File upload (JWT Authentication added here)
router.post('/upload', authenticateJWT, upload.single('file'), uploadToCloudinary);

export default router;
