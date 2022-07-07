import React, { useState } from "react";
import monsterimg from "../img/monster-cartoon-1.png";
import axios from "axios";
import { addcontribute } from '../actions/aPostAction'
import { useDispatch ,useSelector } from 'react-redux'




export default function Contribute() {
  const dispatch = useDispatch()
  const [collegeName, setcollegeName] = useState('')
  const [year, setyear] = useState('')
  const [semester, setsemester] = useState('')
  const [subjectName, setsubjectName] = useState(" ")
  const [gDriveLink, setgDriveLink] = useState('')

  const handleSubmit = () => {
   
   const data = {
    Institute:collegeName ,
    year:year ,
    semester : semester ,
    subject : subjectName ,
    gDrive : gDriveLink
   }
   dispatch(addcontribute(data))
  }

  return (
    <div className="contribute">
      <div className="contribute-left-box">

        <div className="contri-left-img">
          <img src={monsterimg} alt="" />
        </div>
        <div className="contri-left-caption">
          <p>Feed Me with Notes</p>
          <h5>Thank You!</h5>
        </div>
      </div>
      <div className="contribute-right-box">

        <div className="contri-right-head text-center">
          <h1>Details</h1>
        </div>

        <div className="contri-right-form">

          <div className="contri-right-institute form-label-input">
            <label htmlFor="">Institute</label>
            <input onChange={(e) => setcollegeName(e.target.value)} value={collegeName} type="text" name="" id="" />
          </div>

          <div className="contri-right-year-sem contri-from-f-box">
            <div className="contri-right-year form-label-input">
              <label htmlFor="">Year</label>
              <input onChange={(e) => setyear(e.target.value)} value={year} type="text" />
            </div>

            <div className="contri-right-sem form-label-input">
              <label htmlFor="">Semester</label>
              <input onChange={(e) => setsemester(e.target.value)} value={semester} type="text" name="" id="" />
            </div>
          </div>

          <div className="contri-right-subject-link contri-from-f-box">

            <div className="contri-right-subject form-label-input">
              <label htmlFor="">Subject</label>
              <input onChange={(e) => setsubjectName(e.target.value)} value={subjectName} type="text" name="" id="" />
            </div>

            <div className="contri-right-link form-label-input">
              <label htmlFor="">G-Drive Link</label>
              <input onChange={(e) => setgDriveLink(e.target.value)} value={gDriveLink} type="text" name="" id="" />
            </div>
          </div>

          <div className="contri-button">
            <button onClick={()=>handleSubmit()} className="btn btn-primary">Contribute</button>
          </div>

        </div>

      </div>
    </div>
  );
}
