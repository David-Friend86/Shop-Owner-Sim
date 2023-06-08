import React,{useState} from "react";

const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

function Cash({cash}){

    return(
        <h3>{USDollar.format(cash)}</h3>
    )
}

export default Cash