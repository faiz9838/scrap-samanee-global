import express from "express";
import {
    getTestimonials,
    getTestimonialById,
    createTestimonial,
    updateTestimonial,
    deleteTestimonial,
} from "../../controllers/Testimonials/Testimonial.js";

const router = express.Router();

// Get all testimonials
router.get("/testimonials", getTestimonials);

// Get testimonial by ID
router.get("/testimonials/:id", getTestimonialById);

// Create a new testimonial (Image is a URL string)
router.post("/testimonials", createTestimonial);

// Update testimonial by ID
router.put("/testimonials/:id", updateTestimonial);

// Delete testimonial by ID
router.delete("/testimonials/:id", deleteTestimonial);

export default router;
