import React from "react";
import ItemContainer from "./ItemContainer";


function ElectronicStore({inventory}){

    return(
        <div>
            <h1>Gadget Garden</h1>
            <ItemContainer items={inventory} className='shopInventory'/> 
        </div>
    )
}

export default ElectronicStore