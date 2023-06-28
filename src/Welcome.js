import React, { Fragment, useState } from "react";

const box = {
    width: '500px',
    height: '50px',
    fontSize: 'xx-large',
    textAlign: 'center',

}

function Welcome({handleSubmit}){
    const [shop, updateShop] = useState('')

    return(
        <Fragment>
            <h2 style={{textAlign:'center'}}>Welcome</h2>
            <h3 style={{textAlign:'center', justifyContent:'center'}} > Today, you'll be running your own online store! But first, your store needs a name!</h3>
            <form onSubmit={(event)=> handleSubmit( event,shop)} style={{alignItems:'center', display:'grid', justifyContent: 'center', justifyItems: 'center' }}>
                <input type="text" placeholder="Enter Shop Name..." onChange={(e)=> updateShop(e.target.value)} style={box}></input>
                <br/>
                <input type="submit" style={{width:'25%', height:'30px', borderRadius:'10px' }}></input>
            </form>
        </Fragment>
    )
}

export default Welcome