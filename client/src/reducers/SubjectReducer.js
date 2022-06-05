











export const getAllSubjectReducer = (state={notes:{} , loading:true},action)=>{
    switch(action.type)
    {
        case 'GET_SUBJECT_REQUEST' : return{
            loading:true,
            ...state
        }
        case 'GET_SUBJECT_SUCCESS' : return{
            loading:false,
            notes : action.payload
        }
        case 'GET_SUBJECT_FAILED' : return{
            loading:false,
            error: action.payload
        }
        default : return state
    }
}