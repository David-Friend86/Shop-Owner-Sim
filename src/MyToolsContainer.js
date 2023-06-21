import React from "react";
import MyToolList from "./MyToolList";


const itemStyle = {
    overflow: 'auto',
    height: '675px',
    width: 'inherit',
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: 'repeat(3, 100px)',
    gridGap: '20px',
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