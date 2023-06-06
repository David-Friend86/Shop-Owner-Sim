import React from "react";
import ItemContainer from "./ItemContainer";


function HardwareStore({inventory}){

    return(
        <div>
            <h1>Rockman's Tools</h1>
            <ItemContainer items={inventory} className='shopInventory'/> 
        </div>
    )
}

export default HardwareStore