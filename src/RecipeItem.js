import React, { Fragment } from "react";


function RecipeItem({item}){
    return(
        <Fragment>
            <img style={{width:'100%', maxWidth:'100px', borderRadius: '15%'}} src={item.image} alt={item.name}></img>
            <h3>:X{item.amount}</h3>
        </Fragment>
    )
}

export default RecipeItem