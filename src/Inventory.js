import React, { Fragment, useState } from "react";
import Recipe from './Recipe'

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


function Inventory({item, handleCrafting}){
    const [recipeToggle, toggle] = useState(false)
    function handleToggle(){
        const c = !recipeToggle
        toggle(c)
    }

    return(
       <div style={itemStyle}>
        <h2>{item.name}</h2>
        {recipeToggle==false? null:<Recipe reqTool={item.reqTool} recipe={item.recipe}/>}
        <img style={{width:'100%', maxWidth:'100px', borderRadius: '15%'}} src={item.image} alt={item.name} onMouseOver={handleToggle} onMouseOut={handleToggle} ></img>
        <h3>Sell price:{USDollar.format(item.sellPrice)}</h3>
        <h3>{item.amount ==0? 'Out of Stock!': `In Stock: ${item.amount}`}</h3>
        <button onClick={()=>handleCrafting(item.recipe)}>craft this item</button>
        </div>
    )
}

export default Inventory