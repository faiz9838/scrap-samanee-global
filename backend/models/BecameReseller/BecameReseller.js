import mongoose from "mongoose";

const BecameResellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z\s]+$/.test(v);
            },
            message: props => `${props.value} is not a valid name!`
        }
    },
    productName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9\s]+$/.test(v);
            },
            message: props => `${props.value} is not a valid product name!`
        }
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function (v) {
                return /^\+?[1-9]\d{1,14}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    companyName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9\s]+$/.test(v);
            },
            message: props => `${props.value} is not a valid company name!`
        }
    },
    productImage: {
        type: String,
        required: true
    }
    ,
    message: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 500,
        validate: {
            validator: function (v) {
                return v.length >= 10 && v.length <= 500;
            },
            message: props => `Message must be between 10 and 500 characters!`
        }
    },
    price: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: function (v) {
                return v >= 0;
            },
            message: props => `Price must be a positive number!`
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true,
    versionKey: false
});
const BecameReseller = mongoose.model("BecameReseller", BecameResellerSchema);
export default BecameReseller;
