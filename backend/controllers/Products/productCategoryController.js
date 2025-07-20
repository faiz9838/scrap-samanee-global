import ProductCategory from "../../models/Products/productCategory.js";
import mongoose from "mongoose";
import { uploadToCloudinary } from "../uploadController.js";

// ✅ Get all product categories
export const getProductCategories = async (req, res) => {
    try {
        const productCategories = await ProductCategory.find();
        res.status(200).json(productCategories);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

//Get product category by ID
export const getProductCategoryById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }

        const productCategory = await ProductCategory.findById(id);
        if (!productCategory) {
            return res.status(404).json({ message: "Product category not found" });
        }

        res.status(200).json(productCategory);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch product category", error: error.message });
    }
};

// ✅ Create a new product category
export const createProductCategory = async (req, res) => {
    try {
        const { title, icon, description } = req.body;

        if (!title || !icon) {
            return res.status(400).json({ message: "Title and icon are required" });
        }

        const newProductCategoryData = {
            title,
            icon,
            description
        };

        if (req.file) {
            const uploadResult = await uploadToCloudinary(req.file.buffer, "image");
            newProductCategoryData.icon = uploadResult.secure_url;
        }

        const newProductCategory = new ProductCategory(newProductCategoryData);
        const savedProductCategory = await newProductCategory.save();
        res.status(201).json({ message: "Product category created successfully", data: savedProductCategory });
    } catch (error) {
        res.status(500).json({ message: "Failed to create product category", error: error.message });
    }
};

// ✅ Update product category by ID
export const updateProductCategory = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }

        const updates = { ...req.body };

        // Handle file upload if present
        if (req.file) {
            const uploadResult = await uploadToCloudinary(req.file.buffer, "image");
            updates.icon = uploadResult.secure_url;
        }

        const updatedProductCategory = await ProductCategory.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedProductCategory) {
            return res.status(404).json({ message: "Product category not found" });
        }

        res.status(200).json({ message: "Product category updated successfully", data: updatedProductCategory });
    } catch (error) {
        res.status(500).json({ message: "Failed to update product category", error: error.message });
    }
};

// ✅ Delete product category by ID
export const deleteProductCategory = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }

        const deletedProductCategory = await ProductCategory.findByIdAndDelete(id);
        if (!deletedProductCategory) {
            return res.status(404).json({ message: "Product category not found" });
        }

        res.status(200).json({ message: "Product category deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete product category", error: error.message });
    }
};