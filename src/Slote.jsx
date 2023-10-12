import React from "react";
import "./Slote.css"



const Slote = (porps) =>{

    let {x,y,z} = porps;
    
    if (x == y && y == z) {
        return(
            <>
                <div className="innerslote">
                    <h1> {x} {y} {z} </h1>
                    <h1> This is Matchinhg </h1>
                </div>
                <hr/>
            </>
        )
    } else {
        return(
            <>
                <div className="innerslote">
                    <h1> {x} {y} {z} </h1>
                    <h1> This is Not Matchinhg </h1>

                </div>
                <hr/>

            </>
        )
    }
}

export default Slote;