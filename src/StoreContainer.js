import React from "react";
import ItemContainer from "./ItemContainer";

const itemStyles  = 
 {
    width: 'auto',
    height: '600px',
    display: 'grid',
    gridGap: '20px',
    gridTemplateColumns: 'repeat(5, 200px)',
    justifyContent: 'space-evenly',
    backgroundColor: '#e9ccff',
    overflowX: 'hidden',
  }

  function StoreContainer({storeName, inventory, buyItem}){
    return(
        <div style={{display:'grid', justifyContent:'center'}}>
            <h1 style={{textAlign:'center'}}>{storeName}</h1>
            <div style={itemStyles}>
            <ItemContainer buyItem={buyItem} items={inventory} className='shopInventory'/> 
            </div>
        </div>
    )
  }

  export default StoreContainer