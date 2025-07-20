import Clients from "../../models/OurClients/clients.js";
import mongoose from "mongoose";
import { uploadToCloudinary } from "../uploadController.js";

// ✅ Get all clients
export const getClients = async (req, res) => {
    try {
        const clients = await Clients.find();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// ✅ Create a new client
export const createClient = async (req, res) => {
    try {
        const { companyLogo, title } = req.body;

        if (!companyLogo || !title) {
            return res.status(400).json({ message: "Company logo and title is required" });
        }

        const newClientData = {
            companyLogo,
            title
        };

        if (req.file) {
            const uploadResult = await uploadToCloudinary(req.file.buffer, "image");
            newClientData.companyLogo = uploadResult.secure_url;
        }

        const newClient = new Clients(newClientData);
        const savedClient = await newClient.save();
        res.status(201).json({ message: "Client created successfully", data: savedClient });
    } catch (error) {
        res.status(500).json({ message: "Failed to create client", error: error.message });
    }
};


// ✅ Update client by ID
// ✅ Update client by ID (fixed version)
export const updateClient = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, companyLogo } = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }

        const updates = {
            ...(title && { title }),         // Only update title if provided
            ...(companyLogo && { companyLogo }) // Only update logo if provided
        };

        // Handle file upload if present
        if (req.file) {
            const uploadResult = await uploadToCloudinary(req.file.buffer, "image");
            updates.companyLogo = uploadResult.secure_url;
        }

        // Explicitly set the updated fields and return the full document
        const updatedClient = await Clients.findByIdAndUpdate(
            id,
            { $set: updates },
            { new: true, runValidators: true }
        );

        if (!updatedClient) {
            return res.status(404).json({ message: "Client not found" });
        }

        res.status(200).json({
            message: "Client updated successfully",
            data: updatedClient
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to update client",
            error: error.message
        });
    }
};
// ✅ Delete client by ID
export const deleteClient = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedClient = await Clients.findByIdAndDelete(id);
        if (!deletedClient) return res.status(404).json({ message: "Client not found" });

        res.status(200).json({ message: "Client deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete client", error: error.message });
    }
};