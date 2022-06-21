import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { campPostAction } from '../../actions/aEarnAction'






const htmlDetail = ' '



export default function AddCampForm() {
    const dispatch = useDispatch()
    const [title, settitle] = useState('')
    const [subtitle, setsubtitle] = useState('')
    const [amount, setamount] = useState('')
    const [detail, setdetail] = useState('')
    const [faq, setfaq] = useState('')
    const [link, setlink] = useState('')

    const data = {
        title: title,
        subtitle: subtitle,
        amount: amount,
        detail: detail,
        faq: faq,
        link: link
    }

    function sendData() {
        dispatch(campPostAction(data))
    }
    return (
        <div>AddCampForm
            <div className="addCampForm">
                <div className="campForm-title">
                    <label htmlFor="">Camp Title</label>
                    <input type="text"  onChange={(e)=>{settitle(e.target.value)}} />
                </div>
                <div className="campForm-subtitle">
                    <label htmlFor="">Camp Sub-Title</label>
                    <input type="text" onChange={(e)=>{setsubtitle(e.target.value)}} />
                </div>
                <div className="campForm-amount">
                    <label htmlFor="">Camp amount</label>
                    <input type="text" onChange={(e)=>{setamount(e.target.value)}} />
                </div>
                <div className="campForm-detail">
                    <label htmlFor="">Camp detail</label>
                    <textarea rows='4' cols='50' type="text" onChange={(e)=>{setdetail(e.target.value)}} />
                </div>
                <div className="campForm-faq">
                    <label htmlFor="">Camp faq</label>
                    <textarea type="text"  rows='4' cols='50' onChange={(e)=>{setfaq(e.target.value)}} />
                </div>
                <div className="campForm-link">
                    <label htmlFor="">Camp link</label>
                    <input type="text" onChange={(e)=>{setlink(e.target.value)}} />
                </div>

            </div>
            <button onClick={() => {
                sendData()
            }} className="btn btn-danger">Post campaign</button>
        </div>
    )
}
