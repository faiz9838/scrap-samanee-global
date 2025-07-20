import mongoose from "mongoose";
const whoWeAreSchema = new mongoose.Schema({
    title: { type: String, required: true }, // e.g., "About Us", "Our Mission"
    subtitle: { type: String, required: true }, // e.g., detailed description
    video: { type: String }, // optional image URL
    createdAt: { type: Date, default: Date.now },
});

const WhoWeAre = mongoose.model('WhoWeAre', whoWeAreSchema);
export default WhoWeAre;