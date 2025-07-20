import React, { useEffect, useState } from "react";
import { fetchOurClients } from "../../api/Clients";
import { Box, Typography } from "@mui/material";

const OurClients = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getClients = async () => {
            try {
                const { data } = await fetchOurClients();
                setClients(data);
            } catch (error) {
                console.error("Failed to fetch clients:", error);
            } finally {
                setLoading(false);
            }
        };
        getClients();
    }, []);

    // Create sufficient duplicates for smooth scrolling
    const duplicatedClients = clients.length <= 4
        ? [...clients, ...clients, ...clients, ...clients]
        : [...clients, ...clients];

    return (
        <Box sx={{ textAlign: "center", py: 4, pb: 6, overflow: "hidden" }}>
            {/* <Typography
                variant="h4"
                component="h1"
                sx={{
                    py: { xs: 2, md: 6 },
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
                }}
            >
                Our Clients
            </Typography> */}

            <Box sx={{ position: "relative", width: "100%", mx: "auto" }}>
                <Box sx={{
                    display: "flex",
                    animation: "scroll 40s linear infinite",
                    "@keyframes scroll": {
                        "0%": { transform: "translateX(0%)" },
                        "100%": { transform: `translateX(-${100 * (clients.length / duplicatedClients.length)}%)` }
                    }
                }}>
                    {loading ? (
                        <Typography>Loading...</Typography>
                    ) : clients.length > 0 ? (
                        duplicatedClients.map((client, index) => (
                            <Box key={`${client._id}-${index}`}
                                sx={{
                                    flexShrink: 0,
                                    width: { xs: 100, sm: 140, md: 160 },
                                    height: { xs: 60, sm: 90, md: 100 },
                                    mx: 4,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                <img
                                    src={client.companyLogo}
                                    alt={client.title}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",

                                        transition: "filter 0.3s ease",
                                    }}

                                />
                            </Box>
                        ))
                    ) : (
                        <Typography>No Clients Available</Typography>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default OurClients;