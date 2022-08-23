
import transactionReducer from "../../reducers/transactionReducer";

const defaultState={
    data:[],
}

describe("Transaction Reducer",()=>{
    test("should return default state when state is not undefined",()=>{
        expect(transactionReducer(undefined,{type:"DUMMY_ACTION"})).toEqual(defaultState);
    })
    
    test("should return expected state for FETCH_TRANSACTION action type and specific state",()=>{
        const previousState={
            data:[]
        }
        const action = {
            type:"FETCH_TRANSACTION",
            payload:'test'
        }
        const expectedState={
            data:'test'
        }
        expect(transactionReducer(previousState,action)).toEqual(expectedState);
    })

})