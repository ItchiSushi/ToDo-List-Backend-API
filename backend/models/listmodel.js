const mongoose = require('mongoose')

const listSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true,'Please fill in the field']
    },
},
{
    timestamps: true
});

module.exports = mongoose.model('List', listSchema);