import React from "react";



function MyMaterialsList({name, image, quantity}){
    return(
        <div style={{justifyContent:'center'}}>
            <h3 style={{textAlign:'center'}}>{name}</h3>
            <img style={{width:'100%', maxWidth:'75px', borderRadius: '15%'}} src={image} alt={name}></img>
            <h4>You have: {quantity}</h4>
        </div>
    )
}


export default MyMaterialsList