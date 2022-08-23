import axios from "axios"

export const signIn=(userId)=>{
    return {
        type:'SIGN_IN',
        payload:userId
    }
}

export const signOut=()=>{
    return {
        type:'SIGN_OUT',
        payload:null
    }
}

export const fetchTransactionDetails=()=>  async(dispatch, getState) => {
   const response = await axios.get("transactions.json"); 
   dispatch( {
    type:'FETCH_TRANSACTION',
    payload:response.data.data,
   })
}

