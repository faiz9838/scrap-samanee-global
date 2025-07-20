import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { fetchTestimonials } from "../../api/Testimonials";
import TestimonialSlider from "./TestimonialSlider";

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            try {
                const { data } = await fetchTestimonials();
                setTestimonials(data);
            } catch (err) {
                console.error("Failed to load testimonials", err);
            } finally {
                setLoading(false);
            }
        };
        load();
    }, []);

    if (loading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (testimonials.length === 0) {
        return (
            <Typography align="center" color="text.secondary" sx={{ py: 6 }}>
                No testimonials found.
            </Typography>
        );
    }

    return (
        <Box sx={{ bgcolor: "white", py: 0, mb: 4 }}>
            <Typography variant="h4" align="center" fontWeight="bold"
                sx={{
                    py: { xs: 4, md: 6 },
                    fontWeight: 700,
                    fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
                    textAlign: "center",
                    color: "black",
                    position: "relative",
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: { xs: 20, md: 30 },
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: { xs: 80, md: 120 },
                        height: 4,
                        backgroundColor: "#111827",
                        borderRadius: 2
                    }
                }} >
                Testimonials
            </Typography>

            <TestimonialSlider testimonials={testimonials} />
        </Box>
    );
}
