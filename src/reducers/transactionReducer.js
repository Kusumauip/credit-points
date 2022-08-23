const INITIAL_TRANSACTIONS_STATE={
    data:[]
}

const transactionReducer = (state=INITIAL_TRANSACTIONS_STATE,action)=>{
    switch(action.type){
        case 'FETCH_TRANSACTION':
            return {...state,data:action.payload}
        default:
            return state
    }
}

export default transactionReducer;