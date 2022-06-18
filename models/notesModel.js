const mongoose = require('mongoose')









const notesSchema = mongoose.Schema({
    college: {type:String},
    year: {type:String},
    sem: {type:String},
    branch:{type:String},
    subjects: [
        {
            subject_id:{type:String},
            name:{type:String},
            codename: {type:String},
            notes: [
                {
                    notes_id:{type:String}, 
                    title: {type:String},
                    material: [
                        {
                            material_id:{type:String},
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