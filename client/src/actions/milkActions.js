import axios from "axios";

export const getAllMilks=()=>async dispatch=>{
    dispatch({type:'GET_MILKS_REQUEST'})

try{
    const response =await axios.get('/api/milks/getallmilks')
    console.log(response);
    dispatch({type:'GET_MILKS_SUCCESS' , payload :response.data})

}catch(error) {
    dispatch({type:'GET_MILKS_FAILED' , payload : error})
}


}