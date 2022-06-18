const mongoose = require('mongoose')









const adminAuthSchema = mongoose.Schema({
    password: {type:String}
})

const adminAuthModel = mongoose.model('adminAuth', adminAuthSchema)
module.exports = adminAuthModel