export const registerUserReducer = (state={} , action)=>{


        switch (action.type) 
        {
            case 'USER_REGISTER_REQUEST': return{
                loading:true,
                
            }
            case 'USER_REGISTER_SUCCESS' : return{
                loading:false,
                success:true,
                
            }
            case 'USER_REGISTER_FAILED' : return{
                loading:false,
                error:action.payload
            }   
           
        }  
        return state 

}