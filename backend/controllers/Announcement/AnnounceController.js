import Announcement from '../../models/Announcement/Announcement.js'
import mongoose from 'mongoose'


export const getAnnouncement = async (req, res) => {
    try {
        const announcement = await Announcement.find()
        res.status(200).json(announcement)
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message })
    }
}

export const createAnnouncement = async (req, res) => {
    try {
        const { title } = req.body

        if (!title) {
            return res.status(400).json({ message: 'Title are required' })
        }

        const newAnnouncementData = {
            title
        }

        const newAnnouncement = new Announcement(newAnnouncementData)
        const savedAnnouncement = await newAnnouncement.save()
        res.status(201).json({ message: 'Announcement created successfully', data: savedAnnouncement })
    } catch (error) {
        res.status(500).json({ message: 'Failed to create announcement', error: error.message })
    }
}

//Update announcement by ID
export const updateAnnouncement = async (req, res) => {
    try {
        const { id } = req.params
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" })
        }
        const updates = { ...req.body }
        const updatedAnnouncement = await Announcement.findByIdAndUpdate(id, updates, { new: true })
        if (!updatedAnnouncement) {
            return res.status(404).json({ message: "Announcement not found" })
        }
        res.status(200).json({ message: "Announcement updated successfully", data: updatedAnnouncement })
    } catch (error) {
        res.status(500).json({ message: "Failed to update announcement", error: error.message })
    }
}

//Delete announcement by ID

export const deleteAnnouncement = async (req, res) => {
    try {
        const { id } = req.params
        const deletedAnnouncement = await Announcement.findByIdAndDelete(id)
        if (!deletedAnnouncement) return res.status(404).json({ message: "Announcement not found" })

        res.status(200).json({ message: 'Announcement deleted successfully' })

    } catch (error) {
        res.status(500).json({ message: 'Failed to delete announcement' })
    }
}