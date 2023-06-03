import React from "react";
import ItemContainer from "./ItemContainer";


function HobbyStore({inventory}){

    return(
        <div>
            <h1>Art Stuffs</h1>
            <ItemContainer items={inventory}/> 
        </div>
    )
}

export default HobbyStore