import React from "react";


function Buttons(props) {
    return (
        <div>
            {!props.cond ?
                <button onClick={props.fun} className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-2xl px-5 py-2.5 me-2 mb-2">{props.name}</button>
                : <button className="text-white bg-green-700 hover:bg-green-900 font-medium rounded-lg text-2xl px-5 py-2.5 me-2 mb-2">{props.name}</button>
            }
        </div>
    )
}


export default Buttons;