import React from 'react';
import HeroTable from '../components/tables/Hero/HeroTable';
import { Box, Container } from '@mui/material';
import ClientTable from '../components/tables/OurClient/ClientsTable';
function OurClient() {
    return (
        <Container >

            <ClientTable />

        </Container>
    );
}

export default OurClient;
