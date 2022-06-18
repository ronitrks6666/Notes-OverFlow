
import axios from 'axios'
import uuid from 'react-uuid'








// const data = {
//   "college": "SRM",
//   "year": "3",
//   "sem": "2",
//   "branch":"CSE",
//   "subjects": [
//     {
//       "name": "Software management and design",
//       "codename": "SEPM",
//       "notes": [
//         {
//           "title": "Unit 1",
//           "material": [
//             { 
//              "heading": "All in one",
//               "link": "wwo.gon.com" 
//             }
//           ]
//         }
//       ]
      
//     }
//   ]
  
// }












export const addNewData = (data)=>async (dispatch) =>{
  dispatch({type:"ADD_NEW_REQUEST"})
   
  try {
      console.log(data)
      const response =await axios.post('/api/v4/newdata',{data:data})
      console.log(response.data)
      dispatch({type:"ADD_NEW_SUCCESS"})
  } catch (error) {
      dispatch({type:"ADD_NEW_FAILED",payload:error}) 
  }
}


export const updateData = (body) =>async (dispatch)=>{
  dispatch({type:"UPDATE_REQUEST"})
   
    try {
        console.log(body)
        const response =await axios.post('/api/populate',{data:body})
        console.log('This data is response')
        console.log(response.data)
        dispatch({type:"UPDATE_SUCCESS"})
    } catch (error) {
        dispatch({type:"UPDATE_FAILED",payload:error}) 
    }
}