import React from "react";
import ItemContainer from "./ItemContainer";


const itemStyles  = 
 {
    width: '1200px',
    height: '600px',
    display: 'grid',
    gridGap: '20px',
    gridTemplateColumns: 'repeat(4, 200px)',
    justifyContent: 'space-evenly',
    backgroundColor: '#e9ccff',
    overflowX: 'hidden',
  }

function HardwareStore({inventory}){

    return(
        <div>
            <h1 style={{textAlign:'center'}}>Rockman's Tools</h1>
            <div style={itemStyles}>
            <ItemContainer items={inventory} className='shopInventory'/> 
            </div>
        </div>
    )
}

export default HardwareStore