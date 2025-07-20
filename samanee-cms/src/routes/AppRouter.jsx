import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Hero from '../pages/Hero'
import OurClient from '../pages/OurClients'
import AnnouncementPage from '../pages/Announcement'
import ProductCategory from '../pages/ProductsCategory'
import Products from '../pages/Products'
import WhoWeAre from '../pages/WhoWeAre'
import Testimonials from '../pages/Testimonial'
function AppRouter() {
    return (
        <Routes>
            {/* <Route path="/" element={<Hero />} />
            <Route path="/our-client" element={<OurClients />} /> */}
            {/* Add more routes here */}
            <Route path="/" element={<Hero />} />
            <Route path="/clients" element={<OurClient />} />
            <Route path="/announcement" element={<AnnouncementPage />} />
            <Route path='/productCategory' element={<ProductCategory />} />
            <Route path='/products' element={<Products />} />
            <Route path='/who-we-are' element={<WhoWeAre />} />
            <Route path='/testimonials' element={<Testimonials />} />
        </Routes>
    )
}

export default AppRouter
