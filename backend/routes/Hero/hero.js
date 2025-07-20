import express from 'express';
import upload from '../../middleware/upload.js';
import {
    getHero,
    createHero,
    updateHero,
    deleteHero
} from '../../controllers/Hero/heroController.js';

const router = express.Router();

// GET: Fetch all heroes
router.get('/hero', getHero);


// POST: Create new hero (with image/video upload)
router.post('/hero', upload.single('file'), createHero);

// PATCH: Update a hero (with optional new media)
router.patch('/hero/:id', upload.single('file'), updateHero);

// DELETE: Remove a hero
router.delete('/hero/:id', deleteHero);

export default router;
