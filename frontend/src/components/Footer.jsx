import React from 'react';
import { Box, Grid, Typography, IconButton, TextField, Button, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';

const navSections = {
    "Home": ["Gallery", "Featured",],
    "Others": ["Sales Inquiries", "Became seller", "Feedback",],
    "About Us": ["Our Story", "Team", "Careers"],
};

const socialLinks = [
    { icon: <FacebookIcon />, url: 'https://facebook.com' },
    { icon: <TwitterIcon />, url: 'https://twitter.com' },
    { icon: <LinkedInIcon />, url: 'https://linkedin.com' },
    { icon: <InstagramIcon />, url: 'https://instagram.com' }
];

function Footer() {
    return (
        <Box sx={{ backgroundColor: '#111827', color: 'white', px: { xs: 4, md: 10 }, py: 8 }}>
            <Grid container spacing={6} justifyContent="space-between">
                {/* Logo, Description & Social Media */}
                <Grid item xs={12} md={3}>
                    <Box display="flex" alignItems="center" gap={1}>
                        <img src="/logo-white_edited.png" alt="Company Logo" style={{ height: '50px', width: 'auto' }} />
                    </Box>
                    <Typography variant="body2" sx={{ mt: 2, opacity: 0.8 }}>
                        Leading the Future of Steel Solutions with <br /> innovation,
                        integrity, and excellence.
                    </Typography>

                    {/* Social Media Icons */}
                    <Box display="flex" gap={2} sx={{ mt: 3 }}>
                        {socialLinks.map((social, index) => (
                            <IconButton
                                key={index}
                                component="a"
                                href={social.url}
                                target="_blank"
                                sx={{ color: 'white', '&:hover': { color: '#3b82f6' } }}
                            >
                                {social.icon}
                            </IconButton>
                        ))}
                    </Box>
                </Grid>

                {/* Navigation Links */}
                {Object.entries(navSections).map(([section, links], idx) => (
                    <Grid item xs={6} sm={4} md={2} key={idx}>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            {section}
                        </Typography>
                        {links.map((link, linkIndex) => (
                            <Box
                                key={linkIndex}
                                sx={{
                                    py: 1.5,
                                    '&:hover a': {
                                        color: 'white',
                                        pl: 0.5,
                                    },
                                }}
                            >
                                <Link
                                    to={`/${section.toLowerCase().replace(/\s+/g, '-')}/${link.toLowerCase().replace(/\s+/g, '-')}`}
                                    style={{
                                        textDecoration: 'none',
                                        color: 'rgba(255, 255, 255, 0.7)',
                                        transition: 'all 0.2s ease',
                                        display: 'block',
                                        width: '100%',
                                    }}
                                >
                                    {link}
                                </Link>
                            </Box>
                        ))}
                    </Grid>
                ))}


                {/* Newsletter Subscription */}
                {/* <Grid item xs={12} md={3}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Subscribe to Our Newsletter
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
                        Stay updated with our latest news and offerings.
                    </Typography>
                    <Box display="flex" gap={1}>
                        <TextField
                            fullWidth
                            size="small"
                            placeholder="Your email address"
                            variant="outlined"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                    backgroundColor: 'white'
                                }
                            }}
                        />
                        <Button variant="contained" color="primary" sx={{ borderRadius: '8px' }}>
                            <SendIcon />
                        </Button>
                    </Box>
                </Grid> */}
            </Grid>

            {/* Embedded Smaller Map */}
            <Box sx={{ mt: 6 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Our Location
                </Typography>
                <Box
                    sx={{
                        width: '100%',
                        height: { xs: 200, md: 250 }, // Smaller map height
                        borderRadius: 4,
                        overflow: 'hidden',
                        boxShadow: 3
                    }}
                >


                    <iframe
                        title="Company Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.597512059863!2d77.09315407381945!3d28.701684180940113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04023c2f4efb%3A0x25d5cfb142682fe2!2s401%2C%20B%20Block%20Rd%2C%20Avantika%2C%20Sector%201%2C%20Rohini%2C%20Delhi%2C%20110085!5e0!3m2!1sen!2sin!4v1751885800738!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    />
                </Box>
            </Box>


            {/* Divider & Copyright */}
            <Divider sx={{ borderColor: '#374151', my: 4 }} />
            <Box textAlign="center">
                <Typography variant="body2" sx={{ opacity: 0.6 }}>
                    © {new Date().getFullYear()} Samanee Global. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
}

export default Footer;
