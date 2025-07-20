import Testimonial from "../../models/Testimonials/Testimonial.js";

// Get all testimonials
export const getTestimonials = async (req, res, next) => {
    try {
        const testimonials = await Testimonial.find();
        res.status(200).json(testimonials);
    } catch (error) {
        console.error("❌ Failed to fetch testimonials:", error);
        next(new Error("Failed to fetch testimonials"));
    }
};

// Get testimonial by ID
export const getTestimonialById = async (req, res, next) => {
    try {
        const testimonial = await Testimonial.findById(req.params.id);
        if (!testimonial) {
            return res.status(404).json({ message: "Testimonial not found" });
        }
        res.status(200).json(testimonial);
    } catch (error) {
        console.error("❌ Failed to fetch testimonial:", error);
        next(new Error("Failed to fetch testimonial"));
    }
};

// Create testimonial
export const createTestimonial = async (req, res, next) => {
    try {
        const { name, designation, description, social, image } = req.body;

        if (!name || !designation || !description || !social || !image) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newTestimonial = new Testimonial({
            name,
            designation,
            description,
            image, // This is already a Cloudinary link
            social,
        });

        await newTestimonial.save();
        res.status(201).json(newTestimonial);
    } catch (error) {
        console.error("❌ Error while creating testimonial:", error);
        next(new Error("Failed to create testimonial"));
    }
};

// Update testimonial
export const updateTestimonial = async (req, res, next) => {
    try {
        const { name, designation, description, social, image } = req.body;
        const testimonialId = req.params.id;

        const updateData = { name, designation, description, social };

        if (image) {
            updateData.image = image; // Cloudinary image URL
        }

        const updatedTestimonial = await Testimonial.findByIdAndUpdate(
            testimonialId,
            updateData,
            { new: true }
        );

        if (!updatedTestimonial) {
            return res.status(404).json({ message: "Testimonial not found" });
        }

        res.status(200).json(updatedTestimonial);
    } catch (error) {
        console.error("❌ Failed to update testimonial:", error);
        next(new Error("Failed to update testimonial"));
    }
};

// Delete testimonial
export const deleteTestimonial = async (req, res, next) => {
    try {
        const testimonialId = req.params.id;
        const deletedTestimonial = await Testimonial.findByIdAndDelete(testimonialId);

        if (!deletedTestimonial) {
            return res.status(404).json({ message: "Testimonial not found" });
        }

        res.status(200).json({ message: "Testimonial deleted successfully" });
    } catch (error) {
        console.error("❌ Failed to delete testimonial:", error);
        next(new Error("Failed to delete testimonial"));
    }
};
