import React from "react";

function Navigation({onRouteChange, isSignedIn}){
    if(isSignedIn){
        return(
        <>
        <nav className=" flex justify-end p-3">
            <p onClick={() => onRouteChange("signout")} className=" link text-black underline  text-lg cursor-pointer p-3 ">Sign Out</p>
        </nav>
        </>
    );
  }
    else{
        return(
        <>
        <nav className=" flex justify-end p-3">
            <p onClick={() => onRouteChange("signin")} className=" link text-black underline  text-lg cursor-pointer p-3 ">Sign In</p>
            <p onClick={() => onRouteChange("register")} className=" link text-black underline  text-lg cursor-pointer p-3 ">Register</p>
        </nav>
        </>
    );
    }
    
}

export default Navigation;