import WhoWeAre from "../../models/WhoWeAre/WhoWeAre.js";
import mongoose from "mongoose";
import { uploadToCloudinary } from "../uploadController.js";

// Get all entries
export const getWhoWeAre = async (req, res) => {
    try {
        const entries = await WhoWeAre.find();
        return res.status(200).json({ data: entries });
    } catch (error) {
        return res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// Get by ID
export const getWhoWeAreById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }

        const entry = await WhoWeAre.findById(id);
        if (!entry) {
            return res.status(404).json({ message: "Entry not found" });
        }

        return res.status(200).json({ data: entry });
    } catch (error) {
        return res.status(500).json({ message: "Error fetching entry", error: error.message });
    }
};

// Create entry
export const createWhoWeAre = async (req, res) => {
    try {
        const { title, subtitle, video } = req.body;

        if (!title || !subtitle) {
            return res.status(400).json({ message: "Title and subtitle are required" });
        }

        let videoUrl = null;

        // If video is a Cloudinary URL (starts with https), skip uploading
        if (video && video.startsWith("http")) {
            videoUrl = video;
        } else if (video) {
            const uploaded = await uploadToCloudinary(video, "who_we_are_videos");
            videoUrl = uploaded.secure_url;
        }

        const entry = new WhoWeAre({ title, subtitle, video: videoUrl });
        await entry.save();

        return res.status(201).json({ message: "Entry created", data: entry });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to create WhoWeAre entry",
            error: error.message,
        });
    }
};

// Update entry
export const updateWhoWeAre = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, subtitle, video } = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }

        const updateData = { title, subtitle };

        if (video && video.startsWith("http")) {
            updateData.video = video;
        } else if (video) {
            const uploaded = await uploadToCloudinary(video, "who_we_are_videos");
            updateData.video = uploaded.secure_url;
        }

        const updated = await WhoWeAre.findByIdAndUpdate(id, updateData, { new: true });
        if (!updated) {
            return res.status(404).json({ message: "Entry not found" });
        }

        return res.status(200).json({ message: "Entry updated", data: updated });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to update WhoWeAre entry",
            error: error.message,
        });
    }
};

// Delete entry
export const deleteWhoWeAre = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }

        const deleted = await WhoWeAre.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ message: "Entry not found" });
        }

        return res.status(200).json({ message: "Entry deleted successfully" });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to delete WhoWeAre entry",
            error: error.message,
        });
    }
};
