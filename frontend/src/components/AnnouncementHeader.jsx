import React, { useEffect, useState } from "react";
import { fetchAnnouncement } from "../api/AnnouncementApi";
import { Box, Typography } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";

const AnnouncementHeader = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [animateIcon, setAnimateIcon] = useState(false);

    useEffect(() => {
        const getAnnouncements = async () => {
            try {
                const { data } = await fetchAnnouncement();
                if (Array.isArray(data) && data.length > 0) {
                    setAnnouncements(data);
                } else {
                    setAnnouncements([{ title: "No Announcements" }]);
                }
            } catch (error) {
                console.error("Failed to fetch announcements:", error);
                setAnnouncements([{ title: "No Announcements" }]);
            } finally {
                setLoading(false);
            }
        };
        getAnnouncements();
    }, []);

    useEffect(() => {
        if (announcements.length > 1) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [announcements]);

    // Trigger icon animation on announcement change
    useEffect(() => {
        setAnimateIcon(true);
        const timeout = setTimeout(() => setAnimateIcon(false), 1000); // reset after animation
        return () => clearTimeout(timeout);
    }, [currentIndex]);

    const currentAnnouncement = announcements[currentIndex];

    return (
        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#111827",
            mt: "-8px",
            color: "white",
            padding: "12px 24px",
            width: "100%",
            overflow: "hidden",
            position: "relative"
        }}>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px"
            }}>
                {/* Fixed icon with conditional animation class */}
                <Box
                    sx={{
                        animation: animateIcon ? "shakeBlink 1s ease-in-out" : "none",
                        "@keyframes shakeBlink": {
                            "0%": { transform: "rotate(0deg)", opacity: 1 },
                            "25%": { transform: "rotate(10deg)", opacity: 0.6 },
                            "50%": { transform: "rotate(-10deg)", opacity: 1 },
                            "75%": { transform: "rotate(6deg)", opacity: 0.6 },
                            "100%": { transform: "rotate(0deg)", opacity: 1 }
                        }
                    }}
                >
                    <CampaignIcon sx={{ fontSize: { xs: 20, md: 28 }, color: "white" }} />
                </Box>

                {/* Announcement Text */}
                <Typography key={currentIndex} variant="h6" sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                    fontStyle: 'italic',
                    fontSize: { xs: ".55rem", sm: "1.2rem", md: "1.3rem" },
                    animation: "fadeInOut 5s ease-in-out",
                    "@keyframes fadeInOut": {
                        "50%": { opacity: 1, transform: "translateY(0)" },
                        "100%": { opacity: 0, transform: "translateY(-10px)" }
                    }
                }}>
                    {loading ? "Loading..." : currentAnnouncement?.title}
                </Typography>
            </Box>
        </Box>
    );
};

export default AnnouncementHeader;
