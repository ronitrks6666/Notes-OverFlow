const mongoose = require('mongoose')









const notesSchema = mongoose.Schema({
    college: {type:String},
    year: {type:String},
    sem: {type:String},
    subjects: [
        {
            name:{type:String},
            codename: {type:String},
            notes: [
                {
                    title: {type:String},
                    material: [
                        {
                            heading:{type:String},
                            link: {type:String}
                        }
                    ]
                }
            ]
        }
    ]
})

const notesModel = mongoose.model('notes', notesSchema)
module.exports = notesModel