import Product from "../../models/Products/products.js";
import mongoose from "mongoose";
import { uploadToCloudinary } from "../uploadController.js";

// ✅ Get all products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find().populate("category");
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// ✅ Get product by ID
export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }

        const product = await Product.findById(id).populate("category");
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch product", error: error.message });
    }
};

// ✅ Create a new product
export const createProduct = async (req, res) => {
    try {
        const {
            productName,
            requiredQuantity,
            unit,
            preferredLocation,
            description,
            category,
            image
        } = req.body;

        // Validate required fields
        if (!productName || !requiredQuantity || !unit || !category) {
            return res.status(400).json({
                message: "Product name, required quantity, unit, and category are required"
            });
        }

        const newProductData = {
            productName,
            requiredQuantity,
            unit,
            preferredLocation,
            description,
            category,
            image
        };

        // If image is uploaded, process it
        if (req.file && req.file.buffer) {
            const uploadResult = await uploadToCloudinary(req.file.buffer, "image");
            newProductData.image = uploadResult.secure_url;
        }

        const newProduct = new Product(newProductData);
        const savedProduct = await newProduct.save();

        res.status(201).json({
            message: "Product created successfully",
            data: savedProduct
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to create product",
            error: error.message
        });
    }
};


// ✅ Update product by ID
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;

        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }

        const {
            productName,
            requiredQuantity,
            unit,
            preferredLocation,
            description,
            category,
            image
        } = req.body;

        // Validate required fields
        if (!productName || !requiredQuantity || !unit || !category) {
            return res.status(400).json({
                message: "Product name, required quantity, unit, and category are required"
            });
        }

        const updatedProductData = {
            productName,
            requiredQuantity,
            unit,
            preferredLocation,
            description,
            category,
            image
        };

        // If image is uploaded, replace it
        if (req.file && req.file.buffer) {
            const uploadResult = await uploadToCloudinary(req.file.buffer, "image");
            updatedProductData.image = uploadResult.secure_url;
        }

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            updatedProductData,
            { new: true }
        ).populate("category");

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({
            message: "Product updated successfully",
            data: updatedProduct
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to update product",
            error: error.message
        });
    }
};


// ✅ Delete product by ID
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }

        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted successfully", data: deletedProduct });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete product", error: error.message });
    }
};


// ✅ Get products by category ID
export const getProductsByCategoryId = async (req, res) => {
    try {
        const { categoryId } = req.params;

        // Validate MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(categoryId)) {
            return res.status(400).json({ message: 'Invalid category ID' });
        }

        // Find all products matching the categoryId and populate category details
        const products = await Product.find({ category: categoryId }).populate('category');

        if (!products.length) {
            return res.status(404).json({ message: 'No products found for this category' });
        }

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch products by category', error: error.message });
    }
};

