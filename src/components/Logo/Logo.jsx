import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import logic from './logic.png';

function Logo(){
    return(
        <>
        <div className="mt-0 pt-3 mx-4 w-full max-w-48 ">
            <Tilt >
                 <div className="flex justify-center items-center shadow-pink-950 shadow-2xl rounded-lg bg-white" style={{ height: '200px', backgroundColor: 'pink' }}>
                 <img src={logic} alt="brain logo" /> 
                </div>
           </Tilt>
        </div>
        </>
    );
}

export default Logo;