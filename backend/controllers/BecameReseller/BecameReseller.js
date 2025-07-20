import BecameReseller from "../../models/BecameReseller/BecameReseller.js";

import cloudinary from "../../config/cloudinary.js";
export const createReseller = async (req, res) => {
    try {
        const {
            name,
            productName,
            phone,
            companyName,
            message,
            price,
        } = req.body;

        if (!req.file) {
            return res.status(400).json({ message: "Product image or video is required." });
        }

        // Convert buffer to base64 string
        const base64String = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;

        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(base64String, {
            folder: "resellers",
            resource_type: req.file.mimetype.startsWith("video") ? "video" : "image",
        });

        const newReseller = new BecameReseller({
            name,
            productName,
            phone,
            companyName,
            message,
            price,
            productImage: result.secure_url, // Cloudinary URL
        });

        await newReseller.save();

        res.status(201).json({
            message: "Reseller data submitted successfully!",
            data: newReseller,
        });

    } catch (error) {
        console.error("Create Reseller Error:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

//Get all resellers
export const getAllResellers = async (req, res) => {
    try {
        const resellers = await BecameReseller.find();
        res.status(200).json(resellers);
    } catch (error) {
        console.error("Get All Resellers Error:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

