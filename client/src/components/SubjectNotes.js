import React from "react";










export default function SubjectNotes({ notes , subjectname}) {
  console.log(notes);
  return (
    <div>
      <div className="subject-notes">
        <div className="subject-notes-heading">
          <h4>{subjectname}</h4>
        </div>
        <div className="subject-notes-unit">
          {notes.map((note) => {
            return (
              <div className="sn-units ">
                <div className="sn-unit-heading">
                  {note.title}
                  <div className="sn-unit-studyGuide">
                    <p>
                      Confused about topics?
                      <span>
                        <a className="link" href="">
                          Take our Guide
                        </a>
                      </span>{" "}
                    </p>
                  </div>
                </div>
                <div className="sn-unit-files">
                    {
                        note.material.map((material)=>{
                            return(
                                <div className="sn-unit-file-content">{material.heading}</div>
                            )
                        })
                    }
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
