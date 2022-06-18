import React, { useState } from "react";
import { useDispatch ,useSelector } from 'react-redux'
import { updateData } from '../../actions/aPostAction'








export default function UpdateForm({ toggledisplaypop, popDisplay, ids }) {

    

    const dispatch = useDispatch()
    console.log(ids);
    const { data_id, subject_id, notes_id } = ids;
    const [subjectName, setsubjectName] = useState("");
    const [subjectCode, setsubjectCode] = useState("");
    const [noteTitle, setnoteTitle] = useState("");
    const [materialHead, setmaterialHead] = useState("");
    const [materialLink, setmaterialLink] = useState("");
    let data = {};


    // modifys the google dirve link into dirct-download link || keep it as it is
    function modifyLink(link) {
        let text = link;
        let startIndex = text.indexOf("/d/");
        let endIndex = text.indexOf("/edit");
        if (endIndex == -1) {
            endIndex = text.indexOf("/view");
        }
        if (endIndex == -1) {
            console.log('both link not valid')
            setmaterialLink(link)
        }
        else {
            let downLink = `https://drive.google.com/uc?export=download&id=${text.substring(
                startIndex + 3,
                endIndex
            )}`;
            console.log(downLink);
            setmaterialLink(downLink)
        }

    }

    // sending data to api with the 'id' according to level of insertion 
    //i.e for pushing material we sending(dataId,subjectId,noteId) , these willh help us to find the insertion position
    function sendData() {
        //when adding new subject to the year ,sem, branch
        if (!subject_id && !notes_id) {
            data = {
                dataID: data_id,
                toPost: {
                    name: `${subjectName}`,
                    codename: `${subjectCode}`,
                    notes: [{
                        title: `${noteTitle}`,
                        material: [{
                            heading: `${materialHead}`,
                            link: `${materialLink}`,
                        }],
                    }],
                }
            };
        }
        //adding unit into a perticular subject
        else if (!notes_id) {
            data = {
                dataID: data_id,
                subjectID: subject_id,
                toPost: {
                    title: `${noteTitle}`,
                    material: [{
                        heading: `${materialHead}`,
                        link: `${materialLink}`,
                    }],
                }
            };
        } // posting a material in a perticular subject and in a perticular unit(notes)
        else {
            data = {
                dataID: data_id,
                subjectID: subject_id,
                noteID: notes_id,
                toPost: {
                    heading: `${materialHead}`,
                    link: `${materialLink}`,
                }
            };
        }

        console.table(data);
        dispatch(updateData(data))
    }

    return (
        <div
            className="formBox"
            style={{ display: popDisplay == true ? "block" : "none" }}
        >
            <div className="formContent-box">
                {notes_id || subject_id ? (
                    ""
                ) : (
                    <div className="FCB-subjectDetail">
                        <label htmlFor="">Subject name</label>
                        <input
                            onChange={(e) => setsubjectName(e.target.value)}
                            type="text"
                            value={subjectName}
                            placeholder="ENter the subject name"
                        />
                        <label htmlFor="">Subject-code name</label>
                        <input
                            onChange={(e) => setsubjectCode(e.target.value)}
                            type="text"
                            value={subjectCode}
                            placeholder="ENter the subject code name"
                        />
                    </div>
                )}

                {notes_id ? (
                    ""
                ) : (
                    <div className="FCB-notesDetail">
                        <label htmlFor="">Notes Title</label>
                        <input
                            onChange={(e) => setnoteTitle(e.target.value)}
                            type="text"
                            value={noteTitle}
                            placeholder="ENter Notes Title"
                        />
                    </div>
                )}

                <div className="FCB-materialDetail">
                    <label htmlFor="">Material Heading</label>
                    <input
                        onChange={(e) => setmaterialHead(e.target.value)}
                        type="text"
                        value={materialHead}
                        placeholder="ENter the Material Heading"
                    />
                    <label htmlFor="">Material Link</label>
                    <input
                        onChange={(e) => modifyLink(e.target.value)}
                        type="text"
                        value={materialLink}
                        placeholder="ENter the Material Link"
                    />
                </div>
            </div>
            <button
                className="btn btn-warning"
                onClick={() => {
                    toggledisplaypop();
                }}
            >
                close
            </button>
            <button className="btn btn-danger" onClick={() => sendData()}>
                Send Data
            </button>
        </div>
    );
}
