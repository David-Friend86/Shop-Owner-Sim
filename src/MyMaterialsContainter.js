import React from "react";
import MyMaterialsList from "./MyMaterialsList";

const itemStyle = {
    overflow: 'auto',
    height: '675px',
}

function MyMaterialsContainer({items}){
    return(
        <div style={itemStyle}> 
            {items.map((item)=>
                <MyMaterialsList key={item.name} name={item.name} image={item.image} quantity ={item.quantity}/>
            )}
        </div>
    )
}

export default MyMaterialsContainer