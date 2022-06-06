import React from "react";

export default function SubjectList({
  subject,
  index,
  selectSubject,
  selectedsub,
}) {
  const sendSubcode = (name) => {
    selectSubject(name);
  };

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
    </div>
  );
}
