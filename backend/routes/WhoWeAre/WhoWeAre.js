import express from 'express';
import { getWhoWeAre, createWhoWeAre, getWhoWeAreById, updateWhoWeAre, deleteWhoWeAre } from '../../controllers/WhoWeAre/WhoWeAre.js';
import upload from '../../middleware/upload.js';

const router = express.Router();

// ✅ Get all WhoWeAre entries
router.get('/who-we-are', getWhoWeAre);
// ✅ Create a new WhoWeAre entry
router.post('/who-we-are', upload.single('video'), createWhoWeAre);
// ✅ Get WhoWeAre entry by ID
router.get('/who-we-are/:id', getWhoWeAreById);
// ✅ Update WhoWeAre entry by ID
router.patch('/who-we-are/:id', upload.single('video'), updateWhoWeAre);
// ✅ Delete WhoWeAre entry by ID
router.delete('/who-we-are/:id', deleteWhoWeAre);

export default router;
