import axios from 'axios'









export const campPostAction = (data) => async (dispatch) => {
    dispatch({ type: "GET_CAMP_REQUEST" })
    console.log('sending data camp',data)
    try {
        const response = await axios.post('/api/v4/postcamp', { data: data })
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

export const campUserPostAction = (data) => async (dispatch) =>{
    dispatch({type:"GET_USERPOST_REQUEST"})
    console.log('sending data' , data)
    try{
        
        const response = await axios.post('/api/v4/postcampuser', {data:data} )
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}



export const CampGetAction = (id) => async (dispatch) => {


    if (id) {
        dispatch({ type: 'GET_ONE_CAMP_REQUEST' })
        try {
            const response = await axios.get(`/api/v4/getallcamp?id=${id}`)
            console.log(response.data)
            dispatch({ type: "GET_ONE_CAMP_SUCCESS", payload: { data: response.data[0] } })
        } catch (error) {
            console.log(error)
            dispatch({ type: "GET_ONE_CAMP_FAILED", payload: error })
        }

    }
    else {
        console.log('get all camp')
        dispatch({ type: "GET_CAMP_REQUEST" })
        try {
            const response = await axios.get("/api/v4/getallcamp/")
            console.log(response.data)
            dispatch({ type: "GET_CAMP_SUCCESS", payload: { data: response.data } })
        } catch (error) {
            console.log(error)
            dispatch({ type: "GET_CAMP_FAILED", payload: error })

        }
    }
}