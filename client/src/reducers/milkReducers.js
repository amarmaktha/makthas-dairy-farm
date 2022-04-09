export const getAllMilksReducer=(state={milks : []},action)=>{
    switch(action.type)
    {
        case 'GET_MILKS_REQUEST' : return  {
                loading : true,
                ...state
        }
        case 'GET_MILKS_SUCCESS' : return  {
                loading : false,
                milks : action.payload
        }
        case 'GET_MILKS_FAILED' : return  {
            milks : action.payload ,
            loading : false
        }
        default : return state
    }
}