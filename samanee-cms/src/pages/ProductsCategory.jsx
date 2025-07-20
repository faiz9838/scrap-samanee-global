import React from 'react';
import HeroTable from '../components/tables/Hero/HeroTable';
import { Container } from '@mui/material';
import ProductCategoryTable from '../components/tables/Products/ProductsCategory';
function ProductCategory() {
    return (
        <Container >

            <ProductCategoryTable />

        </Container>
    );
}

export default ProductCategory;
