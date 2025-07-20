import express from 'express';
import {
    createProductCategory,
    deleteProductCategory,
    getProductCategories,
    getProductCategoryById,
    updateProductCategory,
} from '../../controllers/Products/productCategoryController.js';
import upload from '../../middleware/upload.js';

const router = express.Router();

// ✅ Get all product categories
router.get('/productCategory', getProductCategories);
// ✅ Get product category by ID    
router.get('/productCategory:id', getProductCategoryById);
// ✅ Create a new product category
router.post('/productCategory', upload.single('icon'), createProductCategory);
// ✅ Update product category by ID
router.patch('/productCategory:id', upload.single('icon'), updateProductCategory);
// ✅ Delete product category by ID
router.delete('/productCategory:id', deleteProductCategory);

export default router