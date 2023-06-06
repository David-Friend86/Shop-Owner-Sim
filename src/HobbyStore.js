import React from "react";
import ItemContainer from "./ItemContainer";


function HobbyStore({inventory}){

    return(
        <div>
            <h1>Creation Station</h1>
            <ItemContainer items={inventory} className='shopInventory'/> 
 
        </div>
    )
}

export default HobbyStore