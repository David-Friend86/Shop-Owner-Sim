import React, { Fragment } from "react";


function RecipeItem({item}){
    return(
        <div style={{alignItems: 'center', alignContent: 'center', textAlign: 'center'}}>
            <h3> <img style={{width:'100%', maxWidth:'50px', borderRadius: '15%'}} src={item.image} alt={item.name}></img> :x{item.amount}</h3>
        </div>
    )
}

export default RecipeItem