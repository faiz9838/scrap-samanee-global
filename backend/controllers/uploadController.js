// controllers/uploadController.js
import cloudinary from '../config/cloudinary.js';

export const uploadToCloudinary = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const streamUpload = (buffer) => {
            return new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    { resource_type: 'auto' },
                    (error, result) => {
                        if (result) resolve(result);
                        else reject(error);
                    }
                );
                stream.end(buffer);
            });
        };

        const result = await streamUpload(req.file.buffer);

        res.status(200).json({
            message: 'Upload successful',
            url: result.secure_url,
            public_id: result.public_id,
        });
    } catch (error) {
        res.status(500).json({ message: 'Upload failed', error: error.message });
    }
};
