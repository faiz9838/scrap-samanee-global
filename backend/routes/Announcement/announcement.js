import express from 'express'
import { getAnnouncement, createAnnouncement, updateAnnouncement, deleteAnnouncement } from '../../controllers/Announcement/AnnounceController.js'


const router = express.Router()

//GET Announcement 
router.get('/announcement', getAnnouncement)
router.post('/announcement', createAnnouncement)
router.patch('/announcement/:id', updateAnnouncement)
router.delete('/announcement/:id', deleteAnnouncement)

router
export default router