import React from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import RecyclingIcon from '@mui/icons-material/Recycling';
import GavelIcon from '@mui/icons-material/Gavel';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

const uspData = [
    {
        icon: <QuestionAnswerIcon sx={{ fontSize: 36, color: "orange" }
        } />,
        title: "Instant Quotes",
        description: "Get real-time, accurate scrap value based on live market rates."
    },
    {
        icon: <RecyclingIcon sx={{ fontSize: 36, color: "#10b981" }} />, // emerald-500
        title: "Eco Processing",
        description: "We promote responsible recycling and reduce landfill impact."
    },
    {
        icon: <MonetizationOnIcon sx={{ fontSize: 36, color: "#facc15" }} />, // yellow-400
        title: "Direct Selling",
        description: "Sell directly to us and maximize your scrap profits"
    },
    {
        icon: <GavelIcon sx={{ fontSize: 36, color: "#c084fc" }} />, // violet-300
        title: "Govt Compliance",
        description: "All transactions follow proper norms and regulations."
    }
];


const WhyChooseUs = () => {
    return (
        <Box sx={{ py: 6, mb: 0, px: { xs: 3, md: 8 }, }}>
            {/* 🔹 Header */}
            <Typography
                variant="h3"
                align="center"
                fontWeight={700}
                sx={{
                    color: "#111827",
                    mb: 1,
                    fontSize: { xs: "1.9rem", md: "2.5rem" },
                }}
            >
                Why Choose <Box component="span" sx={{ color: "#0f62fe" }}>Samanee Global?</Box>
            </Typography>

            {/* 🔹 Subtitle */}
            <Typography
                align="center"
                sx={{
                    color: "#6b7280",
                    fontSize: "1rem",
                    maxWidth: "700px",
                    mx: "auto",
                    mb: 6,
                }}
            >
                We make scrap selling fast, transparent and environmentally responsible. Trusted by sellers across the country.
            </Typography>

            {/* 🔹 Cards */}
            <Grid
                container
                spacing={4}
                sx={{
                    flexWrap: { xs: "wrap", md: "nowrap" },
                    justifyContent: { xs: "center", md: "space-between" },

                }}

            >
                {uspData.map((usp, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        key={index}
                        sx={{ display: "flex" }}
                    >
                        <Paper
                            elevation={0}
                            sx={{
                                p: 3,
                                borderRadius: "20px",
                                backgroundColor: "#111827", // DARK CARD BG
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center",
                                border: "1px solid #1f2937",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.05) translateY(-4px)",
                                    boxShadow: "0 12px 20px rgba(34, 0, 158, 0.38)",
                                    borderColor: "#374151",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    mb: 3,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: 64,
                                    height: 64,
                                    borderRadius: "50%",
                                    backgroundColor: "#1f2937", // Slightly lighter than card
                                }}
                            >
                                {usp.icon}
                            </Box>

                            <Typography
                                variant="h6"
                                fontWeight={700}
                                fontSize="1.1rem"
                                sx={{ mb: 1.5, color: "#f9fafb" }} // Light title
                            >
                                {usp.title}
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    color: "#d1d5db", // Subtle light gray for text
                                    fontSize: "0.95rem",
                                    lineHeight: 1.6,
                                    maxWidth: "250px",
                                }}
                            >
                                {usp.description}
                            </Typography>
                        </Paper>

                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default WhyChooseUs;
