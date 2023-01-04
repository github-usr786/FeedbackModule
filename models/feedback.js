const mongoose = require('mongoose');

// creating feedback Schema 
const feedbackSchema = new mongoose.Schema({
    regularUser: {
        type: Boolean,
        required: true
    },
    sideEffect: {
        type: Boolean,
        required: true
    },
    serviceFeedBack: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    comments: {
        type: String
    }
    
},{ 
    timestamps: true
});


const Report = mongoose.model('Feedback', feedbackSchema);


module.exports = Report;