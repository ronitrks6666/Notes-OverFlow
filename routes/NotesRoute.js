const experss = require('express')
const router = experss.Router()
const notes = require('../models/notesModel')







router.get("/notes/:college/:year",async (req,res)=>{
    const college = req.params.college
    const year = req.params.year
    let sem = req.query.sem
    console.log(college,year,sem)
    if(!sem){
        sem = '1'
    }
    try {
      const note = await notes.find({$and:[{"college":college},{"year":year},{"sem":sem}]})
   // const note = await notes.find({"_id":'629d024ca83af658df637020'})
      console.log(note)
      res.send(note[0])  
    } catch (error) {
        return res.status(400).json({message:error});
    }
})

module.exports = router