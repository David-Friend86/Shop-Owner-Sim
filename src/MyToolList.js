import React from "react";

function MyToolList({name, image, owned}){
    
    return (
        <div style={{justifyItems:'center', justifyContent: 'center', display: 'inherit'}}>
        <h3>{name}</h3>
        <img style={{width:'100%', maxWidth:'75px', borderRadius: '15%'}} src={image} alt={name}></img>
        <h4>{owned?'You own this tool': `You don't own this item`}</h4>
        </div>
    )
}

export default MyToolList