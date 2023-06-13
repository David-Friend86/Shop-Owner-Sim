import React, {Fragment} from "react";
import StoreContainer from "./StoreContainer";

function ElectronicStore({inventory, buyItem}){
    const storeName = 'Gadget Garden'
    return(
        <Fragment>
            <StoreContainer storeName ={storeName} inventory={inventory} buyItem={buyItem}/>
        </Fragment>
    )
}
export default ElectronicStore