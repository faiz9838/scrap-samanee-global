import React, { useEffect, useState, useRef } from 'react';
import { Box, Grid, Typography, CircularProgress, Tooltip, Fade, Grow } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { fetchWhoWeAre } from '../../api/WhoWeAre';

const WhoWeAreSection = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isVideoHovered, setIsVideoHovered] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        async function loadData() {
            try {
                const res = await fetchWhoWeAre();
                console.log("📦 API response:", res);

                if (res.data?.data?.length > 0) {
                    setData(res.data.data[0]);
                } else if (Array.isArray(res.data)) {
                    setData(res.data[0]);
                } else if (res.data && typeof res.data === 'object') {
                    setData(res.data);
                } else {
                    console.warn("⚠️ Unexpected API structure:", res.data);
                }
            } catch (err) {
                console.error("❌ API error:", err);
            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, []);

    const handlePlayVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    };

    const getVideoSrc = () => {
        if (!data?.video) return null;
        if (typeof data.video === 'string') return data.video;
        if (data.video.url) return data.video.url;
        if (data.video.data?.url) return data.video.data.url;
        return null;
    };

    const videoSrc = getVideoSrc();

    if (loading) {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '80vh'
            }}>
                <CircularProgress size={60} thickness={4} sx={{ color: '#1976d2' }} />
            </Box>
        );
    }

    return (
        <Fade in={true} timeout={800}>
            <Box sx={{
                py: { xs: 4, sm: 6, md: 12 },
                mb: { xs: 4, sm: 6, md: 6 },
                px: { xs: 2, sm: 4, md: 6 },
                backgroundColor: '#111827',
                // backgroundImage: 'linear-gradient(135deg, #111827 0%, #111827 100%)',
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: { xs: 'column', md: 'row' },
                    maxWidth: '1200px',
                    margin: '0 auto',
                    gap: { xs: 4, md: 8 }
                }}>
                    {/* Left: Video with Animated Play Button */}
                    <Box sx={{
                        flex: 1,
                        position: 'relative',
                        borderRadius: 4,
                        overflow: 'hidden',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        transform: isVideoHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                        height: { xs: '50vh', md: '60vh' },
                        width: '100%',
                        maxWidth: { md: '600px' },
                        backgroundColor: '#e3f2fd',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: !isVideoPlaying ? 'pointer' : 'auto',
                        '&:hover': {
                            boxShadow: '0 35px 60px -15px rgba(0, 0, 0, 0.3)'
                        }
                    }}
                        onMouseEnter={() => setIsVideoHovered(true)}
                        onMouseLeave={() => setIsVideoHovered(false)}
                    >
                        {videoSrc ? (
                            <>
                                <video
                                    ref={videoRef}
                                    src={videoSrc}
                                    autoPlay={isVideoPlaying}
                                    muted
                                    loop
                                    preload="metadata"

                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        display: isVideoLoaded ? 'block' : 'none',
                                        borderRadius: 12
                                    }}
                                    onPlay={() => setIsVideoPlaying(true)}
                                    onPause={() => setIsVideoPlaying(false)}
                                    onLoadedData={() => setIsVideoLoaded(true)}
                                    controls={isVideoPlaying}
                                />

                                {!isVideoLoaded && (
                                    <Box sx={{
                                        position: 'absolute',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center'
                                    }}>
                                        <CircularProgress size={60} thickness={4} sx={{ color: '#111827', mb: 2 }} />
                                        <Typography variant="body2" color="textSecondary">
                                            Loading video...
                                        </Typography>
                                    </Box>
                                )}

                                {!isVideoPlaying && isVideoLoaded && (
                                    <Fade in={isVideoHovered || !isVideoLoaded}>
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',

                                                zIndex: 2,
                                                backdropFilter: 'blur(2px)',
                                                '&:hover': {
                                                    transform: "translateY(0px)",
                                                    boxShadow: "0 12px 20px rgba(34, 0, 158, 0.38)"
                                                }
                                            }}
                                            onClick={handlePlayVideo}
                                        >
                                            <PlayCircleOutlineIcon
                                                sx={{
                                                    fontSize: { xs: 80, md: 100 },
                                                    color: 'white',
                                                    opacity: 0.9,
                                                    transition: 'all 0.3s ease',
                                                    transform: isVideoHovered ? 'scale(1.2)' : 'scale(1)',
                                                    filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))'
                                                }}
                                            />
                                        </Box>
                                    </Fade>
                                )}
                            </>
                        ) : (
                            <Box sx={{
                                textAlign: 'center',
                                p: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <Box sx={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(25, 118, 210, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mb: 3
                                }}>
                                    <PlayCircleOutlineIcon
                                        sx={{
                                            fontSize: 60,
                                            color: '#111827',
                                            opacity: 0.7
                                        }}
                                    />
                                </Box>
                                <Typography variant="h6" color="textSecondary" sx={{ mt: 2 }}>
                                    Video Coming Soon
                                </Typography>
                            </Box>
                        )}
                    </Box>

                    {/* Right: Content */}
                    <Box sx={{
                        flex: 1,
                        width: '100%',
                        maxWidth: { md: '600px' },
                        position: 'relative',
                        pl: { md: 4 },
                        // '&::before': {
                        //     content: { md: '""' },
                        //     position: 'absolute',
                        //     left: 0,
                        //     top: 0,
                        //     height: '100%',
                        //     width: '400px',
                        //     backgroundColor: '#1976d2',
                        //     borderRadius: 2,
                        //     transform: 'translateX(-20px)'
                        // }
                    }}>
                        <Grow in={true} timeout={1000}>
                            <Typography variant="h2" sx={{
                                fontWeight: 800,
                                mb: 3,
                                color: 'White',
                                fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3rem' },
                                lineHeight: 1.2,
                                letterSpacing: '-0.5px'
                            }}>
                                {data?.title || "Our Journey"}
                            </Typography>
                        </Grow>

                        <Grow in={true} timeout={1200}>

                            <Typography variant="body1" sx={{
                                color: 'gray',
                                fontSize: { xs: '1.05rem', md: '1.15rem' },
                                lineHeight: 1.8,
                                mb: 4,
                            }}>
                                {data?.subtitle || "We're a passionate team dedicated to excellence in everything we do. Our journey began with a simple idea that has grown into something truly special. With innovation at our core, we strive to create meaningful experiences for our clients and community."}
                            </Typography>

                        </Grow>

                        <Grow in={true} timeout={1400}>
                            <Box sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr' },
                                gap: 3,
                                mt: 2
                            }}>
                                {[
                                    { value: '10+', label: 'Years Experience' },
                                    { value: '500+', label: 'Happy Clients' },
                                    // { value: '50+', label: 'Team Members' },
                                    // { value: '24/7', label: 'Support' }
                                ].map((stat, index) => (
                                    <Box key={index} sx={{
                                        backgroundColor: 'rgb(255, 255, 255)',
                                        borderRadius: 3,
                                        p: 3,
                                        textAlign: 'center',
                                        boxShadow: '0 8px 20px rgba(25, 118, 210, 0.12)',
                                        transition: 'all 0.4s ease',
                                        backdropFilter: 'blur(4px)',
                                        border: '1px solid rgba(25, 118, 210, 0.1)',
                                        '&:hover': {
                                            transform: "translateY(-4px)",
                                            boxShadow: "0 12px 20px rgba(34, 0, 158, 0.38)"
                                        }
                                    }}>
                                        <Typography variant="h3" sx={{
                                            fontWeight: 800,
                                            color: '#111827',
                                            mb: 1,
                                            fontSize: { xs: '2rem', md: '2.5rem' }
                                        }}>
                                            {stat.value}
                                        </Typography>
                                        <Typography variant="body2" sx={{
                                            color: '#546e7a',
                                            fontWeight: 600,
                                            fontSize: { xs: '0.9rem', md: '1rem' }
                                        }}>
                                            {stat.label}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Grow>

                        {/* <Grow in={true} timeout={1600}>
                            <Box sx={{
                                mt: 5,
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 2
                            }}>
                                <Box sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    px: 4,
                                    py: 1.8,
                                    backgroundColor: '#1976d2',
                                    color: 'white',
                                    borderRadius: 50,
                                    fontWeight: 700,
                                    fontSize: '1.05rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
                                    '&:hover': {
                                        transform: 'translateY(-3px)',
                                        boxShadow: '0 6px 16px rgba(25, 118, 210, 0.4)',
                                        backgroundColor: '#1565c0'
                                    }
                                }}>
                                    Learn More
                                </Box>
                                <Box sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    px: 4,
                                    py: 1.8,
                                    backgroundColor: 'transparent',
                                    color: '#1976d2',
                                    borderRadius: 50,
                                    fontWeight: 700,
                                    fontSize: '1.05rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    border: '2px solid #1976d2',
                                    '&:hover': {
                                        backgroundColor: 'rgba(25, 118, 210, 0.1)'
                                    }
                                }}>
                                    Contact Us
                                </Box>
                            </Box>
                        </Grow> */}
                    </Box>
                </Box>
            </Box>
        </Fade>
    );
};

export default WhoWeAreSection;