import React from "react";
import { Link } from "react-router-dom";
import SubjectList from "../components/SubjectList";
import SubjectNotes from "../components/SubjectNotes";
import { useEffect } from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllSubject } from "../actions/SubjectAction";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function Notes() {
  const dispatch = useDispatch();

  const Notes = useSelector((state) => state.getAllSubjectReducer);
  const { notes, error, loading } = Notes;
  console.log(notes);

  let initailIndex = 0;
  const [selectedSubject, setselectedSubject] = useState(0);

 function displayNotes(index){
  console.log(notes.subjects[index].notes)
 }

 function selectSubject(index)  {
   setselectedSubject(index);
  // displayNotes(index)
  }

  useEffect(() => {
    dispatch(getAllSubject());
  }, []);

  return (
    <div>
      <div className="select-sem">
        <div className="select-sem-heading">
          <h3>Semester</h3>
        </div>
        <div className="select-sem-option">
          <div className="ss-option ss-option-active">
            <Link to="?year=1&sem=1">ODD</Link>
          </div>
          <div className="ss-option">
            <Link to="">EVEN</Link>
          </div>
        </div>
      </div>
      <div>
        <div className="subjects">
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
            ) : (
              notes.subjects.map((subject) => {
                initailIndex = initailIndex + 1;
                return (
                  <SubjectList
                    
                    subject={subject}
                    index={initailIndex}
                    selectSubject={selectSubject}
                  />
                );
              })
            )}
          </div>
        <div>
          <div>
            {
             
                
              
            }
          </div>
        </div>
        </div>
      </div>
      {loading ? (
              <Loading />
            ) : error ? (
              <Error error="Something Went Wrong" />
            ) : (
              <SubjectNotes notes={notes.subjects[selectedSubject].notes} subjectname = {notes.subjects[selectedSubject].name } />
            )}
      
    </div>
  );
}
