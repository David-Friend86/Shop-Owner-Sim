import React, {Fragment} from "react";
import StoreContainer from "./StoreContainer";

function HardwareStore({inventory,buyItem}){
    const storeName = `Rockman's Tools`
    return(
        <Fragment>
            <StoreContainer storeName ={storeName} inventory={inventory} buyItem={buyItem}/>
        </Fragment>
    )
}

export default HardwareStore