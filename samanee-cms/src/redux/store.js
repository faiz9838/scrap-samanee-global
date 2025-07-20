import { configureStore } from "@reduxjs/toolkit"
import heroReducer from '../redux/Hero/hero.slice.js'
import announcementReducer from '../redux/Announcement/announcement.slice.js'
import clientReducer from '../redux/Clients/client.slice.js'
import productCategoryReducer from '../redux/Products/productCategory.slice.js'
import productReducer from '../redux/Products/products.slice.js'
import whoWeAreReducer from '../redux/WhoWeAre/WhoWeAreSlice.js'
import testimonialReducer from '../redux/Testimonials/testimonial.slice.js'
const store = configureStore({
    reducer: {
        hero: heroReducer,
        announcement: announcementReducer,
        client: clientReducer,
        productCategory: productCategoryReducer,
        products: productReducer,
        whoWeAre: whoWeAreReducer,
        testimonial: testimonialReducer,
    }
})

export default store