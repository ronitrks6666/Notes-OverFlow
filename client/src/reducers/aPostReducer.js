









export const addNewDataReducer = (state={},action)=>{

    switch(action.type)
    {
        case('ADD_NEW_REQUEST'):return{
            loading:true
        }
        case('ADD_NEW_SUCCESS'):return{
            loading:false,
            success:true
        }
        case('ADD_NEW_FAILED'):return{
            loading:false,
            error:action.payload
        }
        default : return state
    }


}