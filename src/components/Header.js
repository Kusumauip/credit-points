import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./Authentication/GoogleAuth";

const Header=()=>{
    return(
        <div className="ui secondary pointing menu">
            <Link to='/' className="item">Check your credit points!</Link>
            <div className="right menu">
            <GoogleAuth/>

            </div>
        </div>
    )
}

export default Header