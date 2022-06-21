const mongoose = require('mongoose')









const collegeSchema = mongoose.Schema({
    college: {type:String},
    branch:[
        {branchName:{type:String}}
    ]
})

const collegeModel = mongoose.model('college', collegeSchema)
module.exports = collegeModel