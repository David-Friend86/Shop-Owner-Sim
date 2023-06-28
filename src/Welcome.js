import React, { Fragment, useState } from "react";

function Welcome({handleSubmit}){
    const [name, updateName] = useState('')
    const [shop, updateShop] = useState('')

    return(
        <Fragment>
            <form onSubmit={(event)=>handleSubmit( event,name,shop)}>
                <input type="text" placeholder="Enter name..." onChange={(e)=>updateName(e.target.value)}></input>
                <input type="text" placeholder="Enter Shop name..." onChange={(e)=> updateShop(e.target.value)}></input>
                <input type="submit"></input>
            </form>
        </Fragment>
    )
}

export default Welcome