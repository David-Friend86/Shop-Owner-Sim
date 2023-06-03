import React, { Fragment } from "react";
import Item from './Item'

function ItemContainer({items}){
    return(
        <Fragment>
        {items.map((item)=>
            <Item key={item.name} item={item}/>
        )}

        </Fragment>
    )
}

export default ItemContainer