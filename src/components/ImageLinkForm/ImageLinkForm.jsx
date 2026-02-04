import React from "react";
import './ImageLinkForm.css';

function ImageLinkForm( {onChange, onButtonClick} ){
    return(
        <>      
            <div className="center items-center flex-col" >
                <p className="text-xl center">
                    {'This Magic Brain will detect faces in your pictures. Give it a try.'}
                </p>
                <div className="center w-full max-w-[750px] items-center ">
                    <div className=" form w-full p-3.5 pr-20 pl-20 mt-4  rounded-lg shadow-lg flex flex-row">
                        <input type="text" onChange={onChange} className=" center w-3/4 p-2 border border-gray-300 rounded-lg outline-none focus:outline-none focus:ring-2 focus:ring-pink-600"></input>
                        <button onClick={onButtonClick} className="w-1/4 ml-2 px-4 py-2 bg-pink-900 text-white rounded-lg">{'Detect'}</button>
                    </div>
                    
                </div>
            </div>


        </>
    );
}

export default ImageLinkForm;