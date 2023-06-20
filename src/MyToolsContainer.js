import React from "react";
import MyToolList from "./MyToolList";


const itemStyle = {
    overflow: 'auto',
    height: '675px',
    display: 'grid',
    justifyItems: 'center',
}

function MyToolsContainer({items}){

    return(
        <div style={itemStyle}>
        {items.map((tool)=>
            <MyToolList key={tool.name} name={tool.name} owned={tool.owned} image={tool.image}/>
        )}
        </div>
    )
}

export default MyToolsContainer