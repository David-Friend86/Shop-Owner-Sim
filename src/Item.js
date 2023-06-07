import React, { Fragment } from "react";

const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

const itemStyle = {
    placeContent: 'center',
    display: 'grid',
    alignContent: 'stretch',
    alignItems: 'stretch',
    justifyItems: 'stretch',
    textAlign: 'center',
    

}

function Item({item}){
    
    return(
        <div style={itemStyle}>
        <h3>{item.name}</h3>
        <img src={item.image} alt={item.name}></img>
        <h4>{`Price: ${USDollar.format(item.price)}`}</h4>
        <button>Buy</button>
        </div>
    )
}

export default Item