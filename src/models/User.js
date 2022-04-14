const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    telephone: {
        type: Number,
        required: true
    },
    address: {
        street: {
            type: String,
            required: true
        },
        number: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        }
    }
});

module.exports = mongoose.model('User', UserSchema);