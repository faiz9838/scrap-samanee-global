import { Box, Typography, Button, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { fetchHeroData } from '../../api/HeroApi';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

function HeroSection() {
    const [heroData, setHeroData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getHeroData = async () => {
            try {
                const { data } = await fetchHeroData();
                if (data && Array.isArray(data)) {
                    setHeroData(data.filter(item =>
                        item.backgroundVideoUrl || item.backgroundImageUrl
                    ));
                }
            } catch (error) {
                console.error('Error fetching hero data:', error);
            } finally {
                setLoading(false);
            }
        };
        getHeroData();
    }, []);

    // Update the slider settings with these properties
    const sliderSettings = {
        infinite: true,
        speed: 600,  // Slightly increased for smoother transition
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        cssEase: 'cubic-bezier(0.4, 0, 0.1, 1)', // Better easing function
        waitForAnimate: false,
        pauseOnHover: false,
        swipeToSlide: true,
        edgeFriction: 0.15,
        touchThreshold: 15,
        adaptiveHeight: false, // This can sometimes cause jankiness
    };

    // Add this CSS to your global styles or in a style tag
    <style>{`
    .slick-track {
        display: flex !important;
        will-change: transform;
    }
    .slick-slide {
        transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
        backface-visibility: hidden;
        transform: translateZ(0);
        height: auto !important;
    }
    .slick-list {
        overflow: hidden;
        will-change: transform;
    }
`}</style>

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={{ width: '100%', position: 'relative', overflowX: 'hidden' }}>
            <Slider {...sliderSettings}>
                {heroData.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: '100%',
                            height: { xs: '100vh', sm: '110vh', md: '120vh' },
                            position: 'relative',
                        }}
                    >
                        {/* Background */}
                        {item.backgroundVideoUrl ? (
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    zIndex: 0,
                                }}
                            >
                                <source src={item.backgroundVideoUrl} type="video/mp4" />
                            </video>
                        ) : (
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    backgroundImage: `url(${item.backgroundImageUrl})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    zIndex: 0,
                                }}
                            />
                        )}

                        {/* Gradient Overlay */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2))',
                                zIndex: 1,
                            }}
                        />

                        {/* Content Container - Modified Section */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: { xs: '2%', sm: '2%', md: '5%' },
                                transform: 'translateY(-50%)',
                                zIndex: 2,
                                width: { xs: '80%', md: '45%' },
                                maxWidth: '800px',
                                color: '#fff',
                                px: 3,
                            }}
                        >
                            <Typography
                                variant="h3"
                                sx={{
                                    fontSize: { xs: '2.2rem', sm: '3rem', md: '3.2rem' },
                                    fontWeight: 700,
                                    mb: 2,
                                    textAlign: { xs: 'left', md: 'left' },
                                    lineHeight: 1.2
                                }}
                            >
                                {item.title}
                            </Typography>

                            <Typography
                                variant="h5"
                                sx={{
                                    fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.8rem' },
                                    fontWeight: 500,
                                    mb: 3,
                                    textAlign: { xs: 'left', md: 'left' },
                                    color: 'rgba(255,255,255,0.95)'
                                }}
                            >
                                {item.subtitle}
                            </Typography>

                            {/* <Typography
                                variant="body1"
                                sx={{
                                    fontSize: '1.1rem',
                                    mb: 4,
                                    maxWidth: '100%',
                                    color: 'rgba(255,255,255,0.85)',
                                    textAlign: { xs: 'center', md: 'left' },
                                    mx: { xs: 'auto', md: 0 },
                                    lineHeight: 1.6
                                }}
                            >
                                {item.description}
                            </Typography> */}

                            {item.buttonText && item.buttonLink && (
                                <Box sx={{
                                    textAlign: { xs: 'left', md: 'left' },
                                    width: { md: 'fit-content' },
                                    pt: 4
                                }}>
                                    <Button
                                        variant="contained"
                                        size='small'
                                        href={item.buttonLink}
                                        sx={{
                                            backgroundColor: '#ffffff',
                                            color: '#000',
                                            fontWeight: 600,
                                            px: 2,
                                            py: 1,

                                            borderRadius: '8px',
                                            textTransform: 'none',
                                            fontSize: '1rem',
                                            '&:hover': {
                                                backgroundColor: '#f0f0f0',
                                                transform: 'translateY(-2px)',
                                                boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                                            },
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        {item.buttonText}
                                    </Button>
                                </Box>
                            )}
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

export default HeroSection;