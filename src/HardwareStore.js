import React, {Fragment} from "react";
import StoreContainer from "./StoreContainer";
function HardwareStore({inventory,buyTool}){
    const storeName = `Rockman's Tools`
    return(
        <Fragment>
            <StoreContainer storeName ={storeName} inventory={inventory} buyItem={buyTool}/>
        </Fragment>
    )
}

export default HardwareStore