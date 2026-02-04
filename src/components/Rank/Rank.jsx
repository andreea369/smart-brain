import React from "react";


function Rank({name, entries}) {
    return(
        <>
        <div className="center items-center flex-col mb-2 text-white">
          <p className="center text-lg w-auto max-w-80">{'Hi, ' + name + ', the total of your entries: '}</p>
          <p className="text-3xl center">{`#${entries}`}</p>
        </div>
        </>
    );
}

export default Rank;