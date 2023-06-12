import React, { Fragment } from "react";
import Item from './Item'



function ItemContainer({items, buyItem}){
    return(
        <Fragment>
        {items.map((item)=>
            <Item buyItem={buyItem} key={item.name} item={item}/>
        )}

        </Fragment>
    )
}

export default ItemContainer