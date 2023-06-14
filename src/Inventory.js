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
        {recipeToggle==false? null:<Recipe key={item.id} reqTool={item.reqTool} recipe={item.recipe}/>}
        <div onMouseOver={handleToggle} onMouseOut={()=>toggle(false)}>
        <h2>{item.name}</h2>
        <img style={{width:'100%', maxWidth:'100px', borderRadius: '15%'}} src={item.image} alt={item.name} ></img>
        </div>
        <h3>Sell price:{USDollar.format(item.sellPrice)}</h3>
        <h3>{item.amount ==0? 'Out of Stock!': `In Stock: ${item.amount}`}</h3>
        <button onClick={()=>handleCrafting(item)}>Craft this item</button>
        </div>
    )
}

export default Inventory