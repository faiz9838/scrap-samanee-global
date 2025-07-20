import ContactUs from "../../models/ContactUs/ContactUs.js";

// @desc Create a new contact us message
export const createContactUsMessage = async (req, res) => {
    try {
        const body = req.body || {};
        const { name = "", email = "", subject = "", message = "" } = body;

        const trimmedName = name.trim();
        const trimmedEmail = email.trim().toLowerCase();
        const trimmedSubject = subject.trim();
        const trimmedMessage = message.trim();

        const errors = {};
        if (!trimmedName) errors.name = "Name is required.";
        if (!trimmedEmail) {
            errors.email = "Email is required.";
        } else if (!/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
            errors.email = "Invalid email format.";
        }
        if (!trimmedSubject) errors.subject = "Subject is required.";
        if (!trimmedMessage) errors.message = "Message is required.";

        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ message: "Validation failed", errors });
        }

        const contactUsMessage = new ContactUs({
            name: trimmedName,
            email: trimmedEmail,
            subject: trimmedSubject,
            message: trimmedMessage
        });

        await contactUsMessage.save();

        return res.status(201).json({
            message: "Message submitted successfully",
            data: {
                id: contactUsMessage._id,
                name: contactUsMessage.name,
                email: contactUsMessage.email,
                subject: contactUsMessage.subject,
                createdAt: contactUsMessage.createdAt
            }
        });
    } catch (error) {
        console.error("Error creating contact us message:", error);
        return res.status(500).json({
            message: "Internal server error",
            error: process.env.NODE_ENV === 'development' ? error.message : "Please try again later"
        });
    }
};

// @desc Get all contact us messages
export const getAllContactUsMessages = async (req, res) => {
    try {
        const messages = await ContactUs.find().sort({ createdAt: -1 });
        return res.status(200).json({
            count: messages.length,
            messages
        });
    } catch (error) {
        console.error("Error fetching messages:", error);
        return res.status(500).json({
            message: "Internal server error",
            error: process.env.NODE_ENV === 'development' ? error.message : "Please try again later"
        });
    }
};
