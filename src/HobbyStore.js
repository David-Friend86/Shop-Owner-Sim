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

function HobbyStore({inventory}){

    return(
        <div>
            <h1 style={{textAlign:'center'}}>Creation Station</h1>
            <div style={itemStyles}>
            <ItemContainer items={inventory} /> 
            </div>
        </div>
    )
}

export default HobbyStore