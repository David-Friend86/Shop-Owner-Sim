import React, { Fragment } from "react";

const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

const itemStyle = {
    placeContent: 'center',
    display: 'grid',
    justifyItems: 'center',
    textAlign: 'center',
}

function Item({item, subtractMoney}){
    
    return(
        <div style={itemStyle}>
        <h3>{item.name}</h3>
        <img style={{width:'100%', maxWidth:'100px', borderRadius: '15%'}} src={item.image} alt={item.name}></img>
        <h4>{`Price: ${USDollar.format(item.price)}`}</h4>
        <button onClick={()=>subtractMoney(item)}>Buy</button>
        </div>
    )
}

export default Item