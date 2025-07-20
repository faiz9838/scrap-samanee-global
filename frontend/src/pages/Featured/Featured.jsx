import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Box,
    Typography,
    Breadcrumbs,
    Paper,

} from '@mui/material';

import { fetchProductCategories } from '../../api/ProductCategory'; // Adjust the import path as necessary
import Testimonials from '../../section/Testimonials/Testimonials';
import ProductCategory from '../../section/Products/Category/ProductCategory';
import WhyChooseUs from '../../components/WhyChooseUs';
import WhoWeAreSection from '../../section/WhoWeAre/WhoWeAre';

function Featured() {
    const { categoryId } = useParams();

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categoryName, setCategoryName] = useState("");
    const [, setLoading] = useState(true);
    const [, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const res = await fetchProductCategories(categoryId);
                setFilteredProducts(res);

                if (res.length > 0) {
                    setCategoryName(res[0]?.category?.title || "Unknown Category");
                } else {
                    setCategoryName("Unknown Category");
                }
            } catch (err) {
                console.error("Error fetching product category:", err);
                setError("Failed to fetch category data.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categoryId]);

    return (
        <>
            <Box sx={{
                px: { xs: 4, sm: 6, md: 8, lg: 12 },
                py: 16,
                pb: 6,
                backgroundColor: "#111827",
            }}>
                <Box sx={{
                    backgroundColor: "#111827",
                    display: "flex",
                    alignItems: { xs: "flex-start", md: "center" },
                    justifyContent: "space-between",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 2,
                }}>
                    <Typography variant='h3' color='white' fontWeight='bold'>
                        Featured
                    </Typography>

                    {/* <Breadcrumbs aria-label="breadcrumb" sx={{ color: 'white' }}>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Home
                        </Link>
                        <Typography sx={{ color: 'white' }}>Featured</Typography>

                    </Breadcrumbs> */}
                </Box>

                {/* Header Description */}
                <Paper
                    elevation={0}
                    sx={{
                        py: 4,
                        pb: 0,
                        borderRadius: 2,
                        backgroundColor: "#111827",
                        color: '#f1f5f9',
                    }}
                >
                    <Typography
                        variant="body1"
                        color="gray"
                        sx={{ whiteSpace: 'pre-line', fontSize: '0.9rem' }}
                    >
                        Samanee Global buys high-quality scrap materials including{" "}
                        <strong>{categoryName.toLowerCase()}</strong>. We source and purchase from
                        industrial and commercial vendors to help build a cleaner, sustainable
                        future. Browse our featured category to see what we are actively buying.
                    </Typography>
                </Paper>
            </Box>

            {/* Products Section
            <Box sx={{
                px: { xs: 3, md: 8 },
                backgroundColor: "#111827",
                py: 4,
            }}>
                {loading ? (
                    <Box sx={{ textAlign: "center", py: 5 }}>
                        <CircularProgress sx={{ color: "#3b82f6" }} />
                    </Box>
                ) : error ? (
                    <Typography color="error">{error}</Typography>
                ) : (
                )}
            </Box> */}
            <Box sx={{
                px: { xs: 1, sm: 1, md: 8 },
                pb: 2,

                mt: { xs: 2, md: 6 }, // Margin top for spacing
                borderRadius: 2, // Rounded corners
                boxShadow: 1 // Subtle shadow for depth
            }}>

                <ProductCategory products={filteredProducts} />
            </Box>
            <WhoWeAreSection />

            {/* Testimonials */}
            <WhyChooseUs />
            <Testimonials />
        </>
    );
}

export default Featured;
