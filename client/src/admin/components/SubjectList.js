import React from "react";









export default function SubjectList({
  subject,
  index,
  selectSubject,
  selectedsub,
  toggledisplaypop,
  noteid,
  collect_id
}) {
  // const sendSubcode = (name) => {
  //   selectSubject(name);
  // };
// console.log(noteid)
  return (
    <div
      onClick={() => {
        selectSubject(index - 1);
      }}
      className={`subject-list-items ${
        selectedsub == index-1 ? "subject-list-items-active" : ""
      }`}
    >
      {subject.codename} 
      <button onClick={()=>{
        toggledisplaypop();
        collect_id(noteid,subject._id)
        }} className="add-note-btn btn btn-warning">+Add Notes</button >
    </div>
  );
}
