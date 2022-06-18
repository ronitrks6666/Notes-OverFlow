



import axios from 'axios'










export const adminAuth = (pass)=>async (dispatch) =>{
    dispatch({type:"AUTH_REQUEST"})
     
    try {
        console.log(pass)
        const response =await axios.get('/api/auth')
        const recievedPass = response.data
        if(pass==recievedPass){
            dispatch({type:"AUTH_SUCCESS"})
            localStorage.setItem("ADMIN_AUTH",pass)
            window.location.href="/admin"
        }
        else{
            dispatch({type:"AUTH_REJECTED"})
        }
        
    } catch (error) {
        console.log(error)
        dispatch({type:"AUTH_FAILED",payload:error}) 
    }
  }

export const checkAuth = ()=>async (dispatch)=>{
    dispatch({type:"AUTH_REQUEST"})
     
    try {
        if(localStorage.getItem('ADMIN_AUTH')){
            dispatch({type:"AUTH_FOUND"})
        }
        else{
            window.location.href = '/adminlogin'
        }
        
       
        
    } catch (error) {
        console.log(error)
        dispatch({type:"AUTH_FAILED",payload:error}) 
    }
  
}