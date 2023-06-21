import React from "react";

function MyNavBar({displayItems}){
    return(
        <div>
            <button onClick={()=>displayItems('materials')}>Materials</button>
            <button onClick={()=>displayItems('tools')}>Tools</button>
        </div>
    )
}

export default MyNavBar