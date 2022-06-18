import React, { useState } from "react";
import carousel1 from "../img/carousel-1.jpg";
import students from "../img/graduate-student.jpg";




export default function SelectCollege() {
  const [inputText, setinputText] = useState("");
  const [stateCollege, setstateCollege] = useState("College..");
  const [stateBranch, setstateBranch] = useState("Branch...");

  function collegeFunc(e) {
    setstateCollege(e.target.value);
  }
  function branchFunc(e) {
    setstateBranch(e.target.value);
  }

  function searchData(){
    console.log(stateCollege , stateBranch)
    localStorage.setItem("NOF_COLLEGE", stateCollege);
    localStorage.setItem("NOF_BRANCH" , stateBranch)
    window.location.href = "/selectyear";
  }


  return (
    <div className="SelectCollege-box">
     
      <div className=" content-box-1 w-100">

      

        <div className="w-60 left-img-box" >
          <img style={{ width: "100%" }} src={students} alt="" />
        </div>

        <div
          className=" home-right-box"
          
        >
         <div className="input-select-box">
         <div className="select-college">
            <div className="sc-heading">
              <h4>Select your College</h4>
            </div>

            <select
              name=""
              className="collegeSelect custom-select"
              onChange={(e) => setstateCollege(e.target.value)}
              value={stateCollege}
              id="inputGroupSelect01"
            >
              <option selected>Choose...</option>
              <option value="SRM">SRM</option>
              <option value="hello">ONfde</option>
              <option value="hello">ONfdfde</option>
            </select>
          </div>
          <div className="select-branch">
            <div className="sc-heading">
              <h4>Select your Branch</h4>
            </div>

            <select
              name=""
              className="branchSelect custom-select"
              onChange={(e) => setstateBranch(e.target.value)}
              value={stateBranch}
              id="inputGroupSelect02"
            >
              <option selected>Choose...</option>
              <option value="CSE">CSE</option>
              <option value="hello">ONfde</option>
              <option value="hello">ONfdfde</option>
            </select>
          </div>
         </div>
          <div className="submit-btn">
            <button onClick={()=>{searchData()}} className="btn coll-branch-sbtn btn-success">Search</button>
          </div>
        </div>
        
      </div>
    </div>
  ); 
}
