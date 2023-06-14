import React from "react";
import Inventory from "./Inventory";

const itemStyle = {
    width: 'auto',
    height: '600px',
    display: 'grid',
    gridGap: '20px',
    gridTemplateColumns: 'repeat(4, 200px)',
    justifyContent: 'space-evenly',
    backgroundColor: '#e9ccff',
    overflowX: 'hidden',
    
  }

function InventoryContainer({inventory, handleCrafting}){

    return(
        <div style={{display:'grid', justifyContent:'center'}}>
        <div style={itemStyle}>
        {inventory.map((item)=>
        <Inventory handleCrafting={handleCrafting} key={item.id} item ={item}/>
        )}
        </div>
        </div>
    )
}

export default InventoryContainer