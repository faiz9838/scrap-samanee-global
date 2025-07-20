import React from "react";
import {
    Box,
    Typography,
    Avatar,
    IconButton,
    Stack,
    Paper,
} from "@mui/material";
import {
    LinkedIn,
    Twitter,
    Instagram,
    WhatsApp,
    Facebook,
} from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const getSocialIcon = (type) => {
    switch (type) {
        case "linkedin":
            return <LinkedIn fontSize="small" />;
        case "twitter":
            return <Twitter fontSize="small" />;
        case "instagram":
            return <Instagram fontSize="small" />;
        case "whatsapp":
            return <WhatsApp fontSize="small" />;
        case "facebook":
            return <Facebook fontSize="small" />;
        default:
            return null;
    }
};

export default function TestimonialSlider({ testimonials = [] }) {
    return (
        <Box sx={{ px: { xs: 2, md: 8 }, py: 4, mb: 6, bgcolor: "white" }}>
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 5000 }}
                loop
                pagination={{ clickable: true }}
                spaceBetween={30}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={testimonial._id || index}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: { xs: 3, md: 6 },
                                borderRadius: 6,
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                alignItems: "center",
                                gap: 4,
                                backgroundColor: "#111827",
                                color: "#fff",
                            }}
                        >
                            {/* LEFT - 55% */}
                            <Box sx={{ flex: 0.70 }}>
                                <Typography
                                    variant="h5"
                                    sx={{ fontWeight: 500, mb: 2, lineHeight: 1.6 }}
                                >
                                    {testimonial.description}
                                </Typography>

                                {/* Social Icons + Name */}
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    spacing={2}
                                    mt={3}
                                >
                                    {/* Social icons FIRST */}
                                    <Stack direction="row" spacing={1}>
                                        {testimonial.social &&
                                            getSocialIcon(testimonial.social.type) && (
                                                <IconButton
                                                    href={testimonial.social.url}
                                                    target="_blank"
                                                    sx={{
                                                        color: "#fff",
                                                        bgcolor: "#2563eb",
                                                        "&:hover": { bgcolor: "#1d4ed8" },
                                                        width: 36,
                                                        height: 36,
                                                    }}
                                                >
                                                    {getSocialIcon(testimonial.social.type)}
                                                </IconButton>
                                            )}
                                    </Stack>

                                    {/* Then Name & Designation */}
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                            {testimonial.name}
                                        </Typography>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{ color: "#9ca3af" }}
                                        >
                                            {testimonial.designation}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>

                            {/* RIGHT - 45% */}
                            <Box
                                sx={{
                                    flex: 0.30,
                                    position: "relative",
                                    height: 240,
                                    maxWidth: 240,
                                    mx: "auto",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                {/* Animated Background Circles */}
                                <Box
                                    sx={{
                                        position: "absolute",
                                        width: 160,
                                        height: 160,
                                        borderRadius: "50%",
                                        bgcolor: "#3b82f6",
                                        opacity: 0.15,
                                        top: "40%",
                                        left: "20%",
                                        transform: "translate(-50%, -50%) scale(1.2)",
                                        animation: "float1 6s ease-in-out infinite",
                                        zIndex: 0,
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: "absolute",
                                        width: 160,
                                        height: 160,
                                        borderRadius: "50%",
                                        bgcolor: "#60a5fa",
                                        opacity: 0.2,
                                        top: "60%",
                                        left: "75%",
                                        transform: "translate(-50%, -50%) scale(1)",
                                        animation: "float2 4s ease-in-out infinite",
                                        zIndex: 0,
                                    }}
                                />

                                {/* Avatar */}
                                <Avatar
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    sx={{
                                        width: 200,
                                        height: 200,
                                        border: "5px solid white",
                                        boxShadow: 6,
                                        zIndex: 1,
                                    }}
                                />
                            </Box>
                        </Paper>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Animation Keyframes */}
            <style>
                {`
          @keyframes float1 {
            0%, 100% { transform: translate(-50%, -50%) scale(1.2); }
            50% { transform: translate(-50%, -54%) scale(1.25); }
          }
          @keyframes float2 {
            0%, 100% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -46%) scale(1.1); }
          }
        `}
            </style>
        </Box>
    );
}
