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
  const { notes, error, loading, notFound, year, sem } = Notes;

  let initailIndex = 0;
  const [selectedSubject, setselectedSubject] = useState(0);

  // for active subject

  function selectSem(year, sem) {
    console.log("year and sem", year, sem);
    dispatch(getAllSubject(year, sem));
  }

  function selectSubject(index, selectedSub) {
    setselectedSubject(index);
    // displayNotes(index)
  }

  useEffect(() => {
    dispatch(getAllSubject());
  }, []);

  return (
    <div>
      <div className="select-sem">
        <h3>
          <button className="mx-5 btn btn-danger back-btn">
            <i class="fa fa-angle-left mx-1"></i>
            <Link to="/selectyear">BACK </Link>
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
        />
      )}
    </div>
  );
}
