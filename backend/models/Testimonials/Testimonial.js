import mongoose from "mongoose";


const testimonialSchema = new mongoose.Schema({
    name: { type: String, required: true },              // Full name of the person
    designation: { type: String, required: true },       // Role or title (e.g., Scrap Seller, Vendor)
    description: { type: String, required: true },       // Feedback or testimonial content
    image: { type: String, required: true },             // URL or path to avatar image
    social: {
        type: { type: String, enum: ["linkedin", "whatsapp"], required: true },   // Type of social link
        url: { type: String, required: true }            // Full social profile or contact link
    }
}, {
    timestamps: true,
});

const Testimonial = mongoose.model("Testimonial", testimonialSchema);
export default Testimonial;

