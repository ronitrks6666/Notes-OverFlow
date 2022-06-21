import React, { useEffect, useState } from "react";
import students from "../img/graduate-student.jpg";
import { checkAuth } from '../actions/authAction';       
import { useDispatch } from "react-redux";




export default function ASelectCollege() {
  const dispatch = useDispatch()
  const [stateCollege, setstateCollege] = useState("College..");
  const [stateBranch, setstateBranch] = useState("Branch...");
  const [college, setcollege] = useState([])
  const [branch, setbranch] = useState(null)


  function searchData() {
    console.log(stateCollege, stateBranch)
    localStorage.setItem("NOF_COLLEGE", stateCollege);
    localStorage.setItem("NOF_BRANCH", stateBranch)
    window.location.href = "/selectyear";
  }

  
  function changed(name){
    setstateCollege(name)
    console.log(stateCollege)
    let data = college.filter(item => item.college == name );
    console.log(data[0].branch)
    setbranch(data[0])
  }


  useEffect(() => {
    dispatch(checkAuth())
    fetch("/api/college")
      .then((res) => res.json())
      .then((data) => { setcollege(data) });
  }, [])

  console.log(college)
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
                onChange={(e) => changed(e.target.value)}
                value={stateCollege}
                id="inputGroupSelect01"
              >
                <option selected>Choose...</option>
                {college ? (college.map((item) => {
                  return <option value={item.college}>{item.college}</option>
                })) : (<h1>loading</h1>)}

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
                { branch ?  (branch.branch.map((item)=>{
                  return <option value={item.branchName} >{item.branchName}</option>
                }))  : (<h1>loading</h1>) }
               
              </select>
            </div>
          </div>
          <div className="submit-btn">
            <button onClick={() => { searchData() }} className="btn coll-branch-sbtn btn-success">Search</button>
          </div>
        </div>

      </div>

     
    </div>
  );
}
