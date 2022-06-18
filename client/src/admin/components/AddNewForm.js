import React, { useState } from 'react'
import { addNewData } from '../../actions/aPostAction'
import { useDispatch ,useSelector } from 'react-redux'













export default function AddNewForm() {
    const dispatch = useDispatch()


    const [collegeName, setcollegeName] = useState('')
    const [year, setyear] = useState('')
    const [semester, setsemester] = useState('')
    const [branch, setbranch] = useState('')
    const [subjectName, setsubjectName] = useState("");
    const [subjectCode, setsubjectCode] = useState("");
    const [noteTitle, setnoteTitle] = useState("");
    const [materialHead, setmaterialHead] = useState("");
    const [materialLink, setmaterialLink] = useState("");

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
    let data = {}
    function submitData() {
        data = {
            college: `${collegeName}`,
            year: `${year}`,
            sem: `${semester}`,
            branch: `${branch}`,
            subjects: 
                {
                    name: `${subjectName}`,
                    codename: `${subjectCode}`,
                    notes: {
                        title: `${noteTitle}`,
                        material: {
                            heading: `${materialHead}`,
                            link: `${materialLink}`,
                        },
                    },

                }
            

        }
        dispatch(addNewData(data))
    }


    return (
        <div>
            <label htmlFor="">College name</label>
            <input type="text" value={collegeName} onChange={(e) => setcollegeName(e.target.value)} />
            <label htmlFor="">Year</label>
            <input type="text" value={year} onChange={(e) => setyear(e.target.value)} />
            <label htmlFor="">Semester</label>
            <input type="text" value={semester} onChange={(e) => setsemester(e.target.value)} />
            <label htmlFor="">Branch</label>
            <input type="text" value={branch} onChange={(e) => setbranch(e.target.value)} />

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
            <div className="FCB-notesDetail">
                <label htmlFor="">Notes Title</label>
                <input
                    onChange={(e) => setnoteTitle(e.target.value)}
                    type="text"
                    value={noteTitle}
                    placeholder="ENter Notes Title"
                />
            </div>
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

            <div className="formSubmitBtn btn btn-danger my-4" onClick={() => { submitData() }}>Submit</div>
        </div>
    )
}
