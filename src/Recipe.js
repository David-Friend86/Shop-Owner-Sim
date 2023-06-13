import React, { Fragment } from "react";
import RecipeItem from './RecipeItem'

const recipeStyle ={
    display: 'grid',
    backgroundColor: '#d9caff',
    zIndex: 4,
}


function Recipe({recipe, reqTool}){
    return(
        <div style={recipeStyle}>
            <h3>You need: {reqTool}</h3>
            {recipe.map((item)=><RecipeItem key={item.id} item={item}/>)}

        </div>
    )
}

export default Recipe