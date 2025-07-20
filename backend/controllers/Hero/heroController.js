import Hero from '../../models/Hero/hero.js';
import mongoose from 'mongoose';
import { uploadToCloudinary } from '../uploadController.js';

// ✅ Get all heroes
export const getHero = async (req, res) => {
    try {
        const heroes = await Hero.find();
        res.status(200).json(heroes);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// ✅ Create a new hero
export const createHero = async (req, res) => {
    try {
        const { title, subtitle, description, buttonText, buttonLink, backgroundImageUrl, backgroundVideoUrl } = req.body;

        if (!title || !subtitle || !description) {
            return res.status(400).json({ message: 'Title, subtitle, and description are required' });
        }

        const newHeroData = {
            title,
            subtitle,
            description,
            buttonText,
            buttonLink,
            backgroundImageUrl,
            backgroundVideoUrl
        };

        if (req.file) {
            const uploadResult = await uploadToCloudinary(req.file.buffer, req.file.mimetype.startsWith("video") ? 'video' : 'image');
            if (req.file.mimetype.startsWith("video")) {
                newHeroData.backgroundVideoUrl = uploadResult.secure_url;
            } else {
                newHeroData.backgroundImageUrl = uploadResult.secure_url;
            }
        }

        const newHero = new Hero(newHeroData);
        const savedHero = await newHero.save();
        res.status(201).json({ message: 'Hero created successfully', data: savedHero });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create hero', error: error.message });
    }
};

// ✅ Update hero by ID
export const updateHero = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }

        const updates = { ...req.body };

        if (req.file) {
            const uploadResult = await uploadToCloudinary(req.file.buffer, req.file.mimetype.startsWith("video") ? 'video' : 'image');
            if (req.file.mimetype.startsWith("video")) {
                updates.backgroundVideoUrl = uploadResult.secure_url;
            } else {
                updates.backgroundImageUrl = uploadResult.secure_url;
            }
        }

        const updatedHero = await Hero.findByIdAndUpdate(id, updates, { new: true });

        if (!updatedHero) {
            return res.status(404).json({ message: 'Hero not found' });
        }

        res.status(200).json({ message: 'Hero updated successfully', data: updatedHero });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update hero', error: error.message });
    }
};

// ✅ Delete hero by ID
export const deleteHero = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedHero = await Hero.findByIdAndDelete(id);
        if (!deletedHero) return res.status(404).json({ message: 'Hero not found' });

        res.status(200).json({ message: 'Hero deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete hero', error: error.message });
    }
};
