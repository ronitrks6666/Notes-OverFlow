import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import validator from 'validator'
import { campUserPostAction } from '../actions/aEarnAction'
import CongratPage from './CongratPage'










export default function CampForm({camplink}) {

    const dispatch = useDispatch()
    const [number, setnumber] = useState('')
    const [email, setemail] = useState('')
    const [upi, setupi] = useState('')
    const [cantEmpty, setcantEmpty] = useState(false)
    const [notValidNum, setnotValidNum] = useState(false)
    const [notValidMail, setnotValidMail] = useState(false)
    const [submitStatus, setsubmitStatus] = useState(false)

    //form submit with validator
    function submitForm() {
        if (number == '' || email == '' || upi=='') {
            console.log('empty field')
            setnotValidNum(false)
            setnotValidMail(false)
            setcantEmpty(true)
        }
        else if (number.length != 10) {
            console.log('invalid number')
            setcantEmpty(false)
            setnotValidMail(false)
            setnotValidNum(true)
        }
        else if (!validator.isEmail(email)) {
            console.log("invali mail")
            setcantEmpty(false)
            setnotValidNum(false)
            setnotValidMail(true)
        }
        else {
            setnotValidNum(false)
            setnotValidMail(false)
            setcantEmpty(false)
            setsubmitStatus(true)
            console.log('Submiting Form', number, email)
            const id = localStorage.getItem("CAMP_ID")
            const data={
                camp_id:id,
                camp_link:camplink,
                user_number:number,
                user_email:email,
                user_upi:upi
            }
            dispatch(campUserPostAction(data))
           
        }


    }

    return (
        <div>
            { submitStatus ? (<CongratPage/>) : (
            <div className="camp-form">
                {
                    cantEmpty ? (<span className='red-star'>Mandatory Fields can't be empty</span>) :
                        notValidMail ? (<span className='red-star'>Please Fill valid E-mail</span>) :
                            notValidNum ? (<span className='red-star'>Please fill valid number</span>) :
                                ('')
                }

                <div className="input-number class-form-input-box">
                    <label className='camp-form-label' htmlFor="">
                        Enter your Number<span className='red-star'>*</span> </label>
                    <div className="camp-number-input-div">
                        <span className='camp-num-code'>+91</span> <input
                            pattern="[0-9]{10}" required
                            className='camp-from-input camp-num-input' type="tel" value={number} onChange={(e) => {
                                e.target.value.length < 11 ? setnumber(e.target.value) : console.log('num exceed')
                            }} />
                    </div>
                </div>

                <div className="input-upi class-form-input-box">
                    <label className='camp-form-label' htmlFor="">Enter UPI ID<span className='red-star'>*</span></label>
                    <input className='camp-from-input' type="text" value={upi} onChange={(e) => { setupi(e.target.value) }} />
                </div>

                <div className="input-e-mail class-form-input-box">
                    <label className='camp-form-label' htmlFor="">Enter your E-mail<span className='red-star'>*</span></label>
                    <input className='camp-from-input' type="email" value={email} onChange={(e) => { setemail(e.target.value) }} />
                </div>
                <div>
                    <div className='camp-form-hint' >1. You will recieve mail with the task link </div>
                </div>
                <div>
                    <div className='camp-form-hint' >2. Use the same number to signup in task</div>
                </div>
                <div>
                <div className='camp-form-hint' >3. Reward will be transfered to UPI</div>
                </div>
                <div className='camp-submitbtn-box'>
                    <button onClick={() => { submitForm() }} className="btn btn-danger">Submit</button>
                </div>
            </div>
            ) }
        </div>
    )
}
