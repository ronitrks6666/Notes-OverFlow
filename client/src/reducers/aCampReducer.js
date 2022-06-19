










export const getOneCampReducer = (state = {campitem:{},loading:true},action)=>{
 
    switch(action.type){
        case('GET_ONE_CAMP_REQUEST'):return{
            loading:true
        }
        case('GET_ONE_CAMP_SUCCESS'):return{
            loading:false,
            campitem:action.payload.data
        }
        case('GET_ONE_CAMP_FAILED'):return{
            loading:false,
            error:action.payload.error
        }
        default : return state
    }
}



export const getAllCampReducer = (state={camp:{},loading:true},action)=>{

    switch(action.type)
    {
        case('GET_CAMP_REQUEST'):return{
            loading:true
        }
        case('GET_CAMP_SUCCESS'):return{
            loading:false,
            camp:action.payload.data
        }
        case('GET_CAMP_FAILED'):return{
            loading:false,
            error:action.payload
        }
        default : return state
    }


}