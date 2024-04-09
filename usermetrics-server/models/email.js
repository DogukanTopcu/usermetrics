import mongoose from "mongoose";

const Email = mongoose.Schema({
    email: String,
    isVerified: {
        type: Boolean,
        default: false,
    },
    isShared: {
        type: Boolean,
        default: false,
    },
    place: {
        type: Number,
        default: 708,
    },

    createdAt: {
        type: Date,
        default: new Date()
    },
});


const Emails = mongoose.model("emails", Email);

export default Emails;