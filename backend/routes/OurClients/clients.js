import express from 'express';
import upload from '../../middleware/upload.js';
import {
    getClients,
    createClient,
    updateClient,
    deleteClient
} from '../../controllers/OurClients/clientsController.js';

const router = express.Router();

// GET: Fetch all clients
router.get('/clients', getClients);

// POST: Create new client (with image upload)
router.post('/clients', upload.single('file'), createClient);

// PATCH: Update a client (with optional new image)
router.patch('/clients/:id', upload.single('file'), updateClient);

// DELETE: Remove a client
router.delete('/clients/:id', deleteClient);

export default router;