import React from "react";
import ItemContainer from "./ItemContainer";

const itemStyles  = 
 {
    display: 'grid',
    gridGap: '20px',
    gridTemplateColumns: 'repeat(4, 200px)',
  
    overflow: 'scroll',
  }

function HobbyStore({inventory}){

    return(
        <div>
            <h1>Creation Station</h1>
            <div style={itemStyles}>
            <ItemContainer items={inventory} /> 
            </div>
        </div>
    )
}

export default HobbyStore