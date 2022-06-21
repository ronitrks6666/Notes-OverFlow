const mongoose = require('mongoose')









const campUserSchema = mongoose.Schema({
    camp_id: {type:String},
    user_number:{type:String},
    user_email:{type:String},
    user_upi:{type:String},
}, {
    timestamps: true
})

const campUserModel = mongoose.model('campUser', campUserSchema)
module.exports = campUserModel