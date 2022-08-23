import React, {useEffect} from "react";
import { BrowserRouter, Route } from "react-router-dom";

import CreditCardPoints from "./CreditCardPoints";
import Header from "./Header";
import axios  from "axios";

const App=()=>{

  return(
    <div>
        <BrowserRouter>
        <div>
          <Header/>
        </div>
        </BrowserRouter>
        <CreditCardPoints/>
    </div>
    )
}

export default App

