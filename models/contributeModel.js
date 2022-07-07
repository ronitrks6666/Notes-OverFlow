const mongoose = require('mongoose')









const contributeSchema = mongoose.Schema({
    Institute: {type:String},
    year:{type:String},
    semester:{type:String},
    subject:{type:String},
    gDrive:{type:String}
}, {
    timestamps: true
}) 

const contributeModel = mongoose.model('contribute', contributeSchema)
module.exports = contributeModel