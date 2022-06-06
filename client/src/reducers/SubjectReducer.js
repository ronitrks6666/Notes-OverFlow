











export const getAllSubjectReducer = (state={notes:{} , loading:true},action)=>{
    switch(action.type)
    {
        case 'GET_SUBJECT_REQUEST' : return{
            loading:true,
            ...state
        }
        case 'GET_SUBJECT_SUCCESS' : return{
            loading:false,
            notes : action.payload.data , 
            sem:action.payload.sem
        }
        case 'GET_SUBJECT_FAILED' : return{
            loading:false,
            error: action.payload
        }
        case 'GET_SUBJECT_NULL' : return{
            loading:false,
            notFound:action.payload.notFound,
            year:action.payload.year,
            sem:action.payload.sem
        }
        default : return state
    }
}