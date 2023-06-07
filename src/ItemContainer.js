import React, { Fragment } from "react";
import Item from './Item'

const itemStyles  = 
 {
    display: 'grid',
    gridgap: '15px',
    gridtemplatecolumns: 'repeat(auto-fit, 200px)',
  }

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