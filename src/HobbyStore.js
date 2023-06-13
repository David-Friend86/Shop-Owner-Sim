import React, { Fragment } from "react";
import StoreContainer from "./StoreContainer"





function HobbyStore({inventory, buyItem}){
 const storeName = 'Creation Station'
    return(
        <Fragment>
            <StoreContainer storeName ={storeName} inventory={inventory} buyItem={buyItem}/>
        </Fragment>
    )
}

export default HobbyStore