import { Box, Typography } from '@mui/material'
import React from 'react'
import ContactUs from './ContactUs'
import ProductList from '../../section/Products/Category/ProductCategory'
import Testimonials from '../../section/Testimonials/Testimonials'

function ContactUsView() {
    return (
        <Box>
            <ContactUs />
            <Box sx={{
                px: { xs: 1, sm: 1, md: 8 },
                pb: 6,

                mt: { xs: 2, md: 4 }, // Margin top for spacing
                borderRadius: 2, // Rounded corners
                boxShadow: 1 // Subtle shadow for depth
            }}>
                <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                        py: { xs: 6, md: 8 },
                        pb: { xs: 0, md: 2 },
                        px: { xs: 1, sm: 1, md: 4 },
                        fontWeight: 700,
                        fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
                        textAlign: { xs: "center", md: "center" },
                        color: "black",
                        position: "relative",
                        // "&::after": {
                        //     content: '""',
                        //     position: "absolute",
                        //     bottom: { xs: 20, md: 30 },
                        //     left: "50%",
                        //     transform: "translateX(-50%)",
                        //     width: { xs: 80, md: 120 },
                        //     height: 4,
                        //     backgroundColor: "#111827",
                        //     borderRadius: 2
                        // }
                    }}
                >
                    One man’s scrap is another <br /> man’s treasure
                </Typography>
                <ProductList />
                <Testimonials />
            </Box>
        </Box>
    )
}

export default ContactUsView
