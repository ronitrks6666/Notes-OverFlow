const express = require('express')
const app = express()
const notes = require('./models/notesModel')
require('dotenv').config()




const db = require('./db')
app.use(express.json());
const port = process.env.PORT || 8000

const notesRoute = require('./routes/NotesRoute')

app.use('/api',notesRoute)




 
 
app.listen(8000,(req,res)=>{
    console.log("Server is running :]")
})