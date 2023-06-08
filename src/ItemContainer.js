import React, { Fragment } from "react";
import Item from './Item'



function ItemContainer({items, subtractMoney}){
    return(
        <Fragment>
        {items.map((item)=>
            <Item subtractMoney={subtractMoney} key={item.name} item={item}/>
        )}

        </Fragment>
    )
}

export default ItemContainer