import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { adminAuth } from '../actions/authAction'









export default function AdminLogin() {
    const dispatch = useDispatch()

    const [password, setpassword] = useState('')


    function loginauth(){
        dispatch(adminAuth(password))
    }
 
    useEffect(() => {
      
        if(localStorage.getItem("ADMIN_AUTH")){
            console.log("found item")
        }
    }, [])
    
    
  return (
    <div>
        <div className="container w-100 text-center my-6">
            <div className="login-heading my-6">
                <h2> ADMIN LOGIN</h2>
            </div>
            <div className="login-input">
                <input type="text" placeholder='password' onChange={(e)=>{setpassword(e.target.value)}} value={password} />
            </div>
            <div className="login-btn">
                <button className="btn btn-danger" onClick={()=>{loginauth()}}>Login</button>
            </div>
        </div>  
    </div>
  )
}
