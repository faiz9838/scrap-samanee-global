import React from 'react'
import { Box } from '@mui/material'
import HeroSection from '../section/Hero/HeroSection'
import AnnouncementHeader from '../components/AnnouncementHeader'
import OurClients from '../section/OurClients/OurClients'
import ProductView from '../section/Products/ProductView'
import { ScrapBuyingStepsPage } from './ScrapSteps/ScrapBuyingSteps'
import WhoWeAreSection from '../section/WhoWeAre/WhoWeAre'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../section/Testimonials/Testimonials'
function HomePage() {
    return (
        <Box sx={
            {
                display: "flex",
                flexDirection: "column",
                height: "auto",
                padding: 0
            }
        }>
            <HeroSection />
            <AnnouncementHeader />
            <OurClients />
            <ProductView />

            <ScrapBuyingStepsPage />
            <WhoWeAreSection />
            <WhyChooseUs />
            <Testimonials />

        </Box>
    )
}

export default HomePage