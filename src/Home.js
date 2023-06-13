import React, { Fragment } from "react";
import InventoryContainer from './InventoryContainter'
import Chat from './Chat'

function Home({inventory, storeName, handleCrafting}){

    return(
        <div>
            <h1 style={{textAlign:'center'}}>{storeName}</h1>
            <InventoryContainer handleCrafting={handleCrafting} inventory={inventory}/>
            <Chat/>
        </div>
    )
}


export default Home