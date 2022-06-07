import React from 'react'
import { useState } from "react";










export default function DriveLink() {
 const [linkValue, setlinkValue] = useState('')
 const [extractedLink, setextractedLink] = useState('')

 function extractLink(){
     console.log("button click")
     let text=linkValue
     console.log(text)
    let startIndex = text.indexOf("/d/")
    let endIndex = text.indexOf("/edit")
     let downLink = `https://drive.google.com/uc?export=download&id=${text.substring(startIndex+3,endIndex)}`
    console.log(downLink)

    // copt the download link to clipboard
    navigator.clipboard.writeText(downLink)
    setextractedLink(downLink)
  
 }
   return (
    <div>
        <div className="input-box d-flex mx-10 my-10">
        <input type="text" value={linkValue}  onChange={e => setlinkValue(e.target.value) }  />
        <button className='btn btn-danger' onClick={()=>{extractLink()}}>Extract link</button>
        </div>
        <div className="extractedlink mx-10 my-10"> {extractedLink} </div> 
    </div>
  )
}
