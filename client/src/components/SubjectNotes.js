import React from "react";
import { useState } from "react";
import bookstack from '../img/tiny-book-card.jpg'





export default function SubjectNotes({ notes, subjectname }) {





  const [copyText, setcopyText] = useState('Share Link')

  function copied(e){
    // to change the copied text to copy and the back to copy
    e.target.innerText = "Copied"
    setTimeout(()=>{e.target.innerText = "Share Link"}, 1000)
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
                  <h2>{note.title}</h2>
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
                          <div className="sn-uf-img-box">
                            <img src={bookstack} className="sn-uf-img" alt="" />
                          </div>
                          <div className="sn-uf-heading-box">
                          {material.heading}
                          </div>
                        </div>

                        <div className="sn-unit-file-link mx-auto ">
                          <button
                            type="button"
                            class="btn btn-primary btn-sm  download-link"
                          >
                            <a href={material.link}> Download </a>
                          </button>
                          <button
                            className=" btn btn-success btn-sm "
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
