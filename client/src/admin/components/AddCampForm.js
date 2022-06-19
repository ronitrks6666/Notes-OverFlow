import React from 'react'
import { useDispatch } from 'react-redux'
import { campPostAction } from '../../actions/aEarnAction'






const htmlDetail = ' '



export default function AddCampForm() {
    const dispatch = useDispatch()
    const data = {
        title:'Open ICICI demat account for free',
        subtitle:'Enjoy seemless trading plus get reward from us',
        amount:'350',
        detail:'edit',
        faq:'edit',
        link:'www.google.com'
    }

    function sendData(){
        dispatch(campPostAction(data))
    }
  return (
    <div>AddCampForm
        <button onClick={()=>{
            sendData()
        }} className="btn btn-danger">Post campaign</button>
    </div>
  )
}
