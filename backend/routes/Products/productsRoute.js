import express from 'express';
import {
    createProduct,
    deleteProduct,
    getProducts,
    getProductById,
    updateProduct,
    getProductsByCategoryId,
} from '../../controllers/Products/productController.js';
import upload from '../../middleware/upload.js';

const router = express.Router();

// ✅ Get all products
router.get('/products', getProducts);
// ✅ Get product by ID
router.get('/products/:id', getProductById);
// ✅ Get products by category
router.get('/products/category/:categoryId', getProductsByCategoryId);
// ✅ Create a new product
router.post('/products', upload.single('image'), createProduct);
// ✅ Update product by ID
router.patch('/products/:id', upload.single('image'), updateProduct);
// ✅ Delete product by ID
router.delete('/products/:id', deleteProduct);

export default router;