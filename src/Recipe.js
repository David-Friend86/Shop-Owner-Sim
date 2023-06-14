import React, { Fragment } from "react";
import RecipeItem from './RecipeItem'

const recipeStyle ={
    display: 'grid',
    backgroundColor: '#d9cabf',
    zIndex: '4',
    width: 'auto',
    height: 'auto',
    position: 'absolute',
    borderRadius: '10%',
    padding: '10px',
}


function Recipe({recipe, reqTool}){
    return(
        <div style={recipeStyle}>
            <h3>Recipe:</h3>
            <h4>Tool: {reqTool[1]}</h4>
            {recipe.map((item)=><RecipeItem key={item.id} item={item}/>)}
        </div>
        
    )
}

export default Recipe