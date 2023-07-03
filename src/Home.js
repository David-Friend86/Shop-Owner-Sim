import React, { Fragment } from "react";
import InventoryContainer from './InventoryContainter'


function Home({inventory, storeName, handleCrafting, handleDelete}){

    return(
        <div>
            <h1 style={{textAlign:'center'}}>{storeName}</h1>
            <InventoryContainer handleDelete={handleDelete} handleCrafting={handleCrafting} inventory={inventory}/>
        </div>
    )
}


export default Home