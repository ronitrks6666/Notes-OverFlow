import React from "react";
import { useState } from "react";






export default function SubjectNotes({ notes, subjectname }) {





  const [copyText, setcopyText] = useState('Copy')

  function copied(e){
    // to change the copied text to copy and the back to copy
    e.target.innerText = "Copied"
    setTimeout(()=>{e.target.innerText = "Copy"}, 2000)
  }

  // console.log(notes);
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
                  {note.material.map((material) => {
                    return (
                      <div className="sn-unit-file-box">
                        <div className="sn-unit-file-content">
                          {material.heading}
                        </div>

                        <div className="sn-unit-file-link mx-auto my-2">
                          <button
                            type="button"
                            class="btn btn-primary btn-sm download-link"
                          >
                            <a href={material.link}> Download </a>
                          </button>
                          <button
                            className=" btn btn-success btn-sm mx-4"
                            onClick={(e) => {
                              navigator.clipboard.writeText(material.link);
                              copied(e)
                            }}
                          >
                            {copyText}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
