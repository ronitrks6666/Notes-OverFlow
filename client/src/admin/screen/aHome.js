import React from 'react'
import { useEffect } from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import SubjectList from "../components/SubjectList";
import SubjectNotes from "../components/SubjectNotes";
import { useState } from "react";

import { getAllSubject } from "../../actions/SubjectAction";
import Loading from "../components/Loading";
import Error from "../components/Error";
import UpdateForm from '../components/UpdateForm';

import { checkAuth } from '../../actions/authAction'; 





export default function AHome() {
    const dispatch = useDispatch()
    //this was for testing the post data
    // useEffect(() => {
    //   dispatch(addNewData())
    
    // }, [])
    

    const Notes = useSelector((state) => state.getAllSubjectReducer);
    const { notes, error, loading, notFound, year, sem } = Notes;
  
    let initailIndex = 0;
    // for active subject
    const [selectedSubject, setselectedSubject] = useState(0);
  
    
    // for Pop-up display
    const [popDisplay, setpopDisplay] = useState(false)

    // For storing '_id'
    const [data_id, setdata_id] = useState('')
    const [subject_id, setsubject_id] = useState('')
    const [notes_id, setnotes_id] = useState('')


    // console.log(notes)
    function selectSem(year, sem) {
      console.log("year and sem", year, sem);
      dispatch(getAllSubject(year, sem));
    }
  
    function selectSubject(index, selectedSub) {
      setselectedSubject(index);
      // displayNotes(index)
    }

    // find which has to be updated on basis of id recieved
    function collect_id (d_id,s_id,n_id){
      setdata_id(d_id)
      setsubject_id(s_id)
      setnotes_id(n_id)
    }

    function toggledisplaypop(){
      if(popDisplay==false){
        setpopDisplay(true)
      }
      else{
        setpopDisplay(false)
      }
    }
  
    useEffect(() => {
      dispatch(checkAuth())
      dispatch(getAllSubject());
    }, []);
  
    return (
      <div>
        <UpdateForm toggledisplaypop={toggledisplaypop} popDisplay={popDisplay} ids={{data_id,subject_id,notes_id}} />
        <div className="select-sem">
          <h3>
            <button className="mx-5 btn btn-danger back-btn">
              <i class="fa fa-angle-left mx-1"></i>
              <Link to="/admin/selectyear">BACK </Link>
            </button>
          </h3>
          <div className="select-sem-heading">
            <h3>Semester</h3>
          </div>
          <div className="select-sem-option">
            <div className={`ss-option ${sem == "1" ? "ss-option-active" : ""}`}>
              <div className="sem-select-text">
                <Link
                  to={`?year=${year ? year : notes.year}&sem=1`}
                  onClick={() => {
                    selectSem(year ? year : notes.year, "1");
                  }}
                >
                  ODD
                </Link>
              </div>
            </div>
            <div className={`ss-option ${sem == "2" ? "ss-option-active" : ""}`}>
              <div className="sem-select-text">
                <Link
                  to={`?year=${year ? year : notes.year}&sem=2`}
                  onClick={() => {
                    selectSem(year ? year : notes.year, "2");
                  }}
                >
                  EVEN
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="subjects">
          <button onClick={()=>{
            toggledisplaypop();
            collect_id(notes._id)
          }} className="add-note-btn btn btn-warning">+Add Sub</button >
            <div className="subject-heading">
              <h3>Select Subject</h3>
            </div>
            <div className="subject-list">
              {/* {!notes.length ?( <div>No data</div> )  :   (
                notes.subjects.map((subject) => {
                  return <SubjectList subject={subject} />;
                })  
              )  */}
              {loading ? (
                <Loading />
              ) : error ? (
                <Error error="Something Went Wrong" />
              ) : notFound ? (
                <Error error="Not data found :[ " />
              ) : (
                notes.subjects.map((subject) => {
                  initailIndex = initailIndex + 1;
                  return (
                    <SubjectList
                      subject={subject}
                      index={initailIndex}
                      selectSubject={selectSubject}
                      selectedsub={selectedSubject}
                      toggledisplaypop={toggledisplaypop}
                      noteid={notes._id}
                      collect_id={collect_id}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something Went Wrong" />
        ) : notFound ? (
          <div> </div>
        ) : (
          <SubjectNotes
            notes={notes.subjects[selectedSubject].notes}
            subjectname={notes.subjects[selectedSubject].name}
            subjectid={notes.subjects[selectedSubject]._id}
            noteid={notes._id}
            toggledisplaypop={toggledisplaypop}
            collect_id={collect_id}
          />
        )}
        
      </div>
    );
}
