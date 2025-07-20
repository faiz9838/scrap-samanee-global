import mongoose from 'mongoose'

const clientSchema = new mongoose.Schema({
    companyLogo: {
        type: String,
        required: true,
    },

    title: { type: String }
})

const Clients = mongoose.model('Clients', clientSchema)
export default Clients