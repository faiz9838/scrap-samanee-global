import mongoose from 'mongoose';


const heroSchema = new mongoose.Schema({

    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
    buttonText: { type: String },
    buttonLink: { type: String },
    backgroundImageUrl: { type: String },
    backgroundVideoUrl: { type: String },
}, {
    timestamps: true,

});

const Hero = mongoose.model('Hero', heroSchema);
export default Hero;

