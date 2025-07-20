import React from 'react'
import ProductList from './Category/ProductCategory'
import { Box, Typography } from '@mui/material'

function ProductView() {
    return (
        <Box sx={{
            px: { xs: 1, sm: 1, md: 4 },
            pb: 6,


        }}>

            <Typography
                variant="h4"
                component="h1"
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
                }}
            >
                What We Buy
            </Typography>
            <ProductList />
        </Box>
    )
}

export default ProductView