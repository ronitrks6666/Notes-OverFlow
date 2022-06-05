import React from 'react'










export default function SubjectList({subject , index ,selectSubject}) {
 
    const sendSubcode = (name)=>{
        selectSubject(name)
    }


    return (
        <div  onClick={()=>{selectSubject(index-1)}} className="subject-list-items subject-list-items-active">{subject.codename}</div>
       
    )
}
