import React, { Fragment } from "react";

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

function Item({item}){
    
    return(
        <Fragment>
        <h3>{item.name}</h3>
        <img src={item.image} alt={item.name}></img>
        <h4>{`Price: ${USDollar.format(item.price)}`}</h4>
        <button>Buy</button>
        </Fragment>
    )
}

export default Item