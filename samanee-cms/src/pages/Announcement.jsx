import React from 'react';
import HeroTable from '../components/tables/Hero/HeroTable';
import { Container } from '@mui/material';
import AnnouncementTable from '../components/tables/Announcement/AnnouncementTable';

function AnnouncementPage() {
    return (
        <Container >

            <AnnouncementTable />
        </Container>
    );
}

export default AnnouncementPage;
