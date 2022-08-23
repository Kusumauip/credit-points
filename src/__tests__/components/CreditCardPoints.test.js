import React from "react";
import {shallow} from "enzyme";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import CreditCardPoints from "../../components/CreditCardPoints";

import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { transactionsData,transactionDataResponse } from "../testUtils";
const mock = new MockAdapter(axios);


const mockStore = configureStore([thunk]);
const intialState = {
        isSignedIn: true,
        userId: 'kusuma p',
        data: transactionsData
}

mock
.onGet("transactions.json")
.reply(200,transactionDataResponse)

describe("<CreditCardPoints />",()=>{
    let enzymeWrapper;
    let store;
    beforeEach(()=>{
        store = mockStore(intialState);
        enzymeWrapper = shallow(<CreditCardPoints store={store}/>);
    })
    
    test("should render CreditCardPoints",()=>{    
        expect(enzymeWrapper.dive().dive().find(CreditCardPoints)).toHaveLength(1)
    })
})