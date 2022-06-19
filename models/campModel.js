const mongoose = require('mongoose')









const campaignSchema = mongoose.Schema({
    title: {type:String , require},
    subtitle:{type:String , require},
    amount:{type:String , require},
    detail:{type:String , require},
    faq:{type:String , require},
    link:{type:String , require}
})

const campaignModel = mongoose.model('campaign', campaignSchema)
module.exports = campaignModel