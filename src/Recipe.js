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
            <h4>Tool: <img src ={reqTool[1]} alt={reqTool[1]} style={{width:'100%', maxWidth:'50px', borderRadius: '15%'}}/></h4>
            {recipe.map((item)=><RecipeItem key={item.id} item={item}/>)}
        </div>
        
    )
}

export default Recipe