import React from "react";
import { BrowserRouter } from "react-router-dom";

import CreditCardPoints from "./CreditCardPoints";
import Header from "./Header";
import { CreditCardPointsWithHooks } from "./CreditCardPointsWithHooks";

const App=()=>{

  return(
    <div>
        <BrowserRouter>
        <div>
          <Header/>
        </div>
        </BrowserRouter>
        <CreditCardPoints/>
        <CreditCardPointsWithHooks/>
    </div>
    )
}

export default App

