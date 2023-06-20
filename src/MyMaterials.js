import React, {useState} from "react";
import MyMaterialsContainer from "./MyMaterialsContainter.js";
import MyNavBar from "./MyNavBar.js"
import MyToolsContainer from "./MyToolsContainer.js";



const style = {
    display: 'grid',
    float: 'right',
    height: '700px',
    width: '500px',
    justifyItems: 'center',
}





function MyMaterials({materials, tools}){

    const [items, toggleItems] = useState('materials')

    function displayItems(stuff){
        toggleItems(stuff)
    }

    return (
        <div style={style}>
            <h2>My Materials</h2>
            <MyNavBar displayItems = {displayItems}/>
            {items=='materials'?<MyMaterialsContainer items={materials}/>:<MyToolsContainer items={tools}/>}
        </div>
    )
}

export default MyMaterials