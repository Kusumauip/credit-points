
import authReducer from '../../reducers/authReducer';

const defaultState={
    isSignIn:null,
    userId:null
}

describe("Auth Reducer",()=>{
    test("should return default state when state is not undefined",()=>{
        expect(authReducer(undefined,{type:"DUMMY_ACTION"})).toEqual(defaultState);
    })
    
    test("should return default state for DUMMY_ACTION action type",()=>{
        expect(authReducer(undefined,{type:"DUMMY_ACTION"})).toEqual(defaultState);
    })

    test("should return expected state for SIGN IN action type and specific state",()=>{
        const previousState={
            isSignIn:null,
            userId:null
        }
        const action = {
            type:"SIGN_IN",
            payload:'kusuma p'
        }
        const expectedState={
            isSignIn:true,
            userId: 'kusuma p'
        }
        expect(authReducer(previousState,action)).toEqual(expectedState);
    })

    test("should return expected state for SIGN OUT action type and specific state",()=>{
        const previousState={
            isSignIn:null,
            userId:null
        }
        const action = {
            type:"SIGN_OUT",
        }
        const expectedState={
            isSignIn:false,
            userId: null
        }
        expect(authReducer(previousState,action)).toEqual(expectedState);
    })
})