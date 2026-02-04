import React from "react";
import './FaceRecognition.css';

function FaceRecognition({imgURL, faceBox}){
    return(
        <>
        <div className="center mt-4">
            <div className="absolute mt-4">
                <img id="input-image" alt="Face-image" src={imgURL} width="500px" height='auto'/>
                <div className="bounding-box" style={{left: faceBox.leftCol, top: faceBox.topRow, width: faceBox.w, height: faceBox.h}}></div>
             </div>
            </div>
        </>
    );
}

export default FaceRecognition;