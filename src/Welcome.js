import React, { Fragment } from "react";

function Welcome(){

    return(
        <Fragment>
            <h1>Enter your name</h1>
            <input type="text" placeholder="Name..."></input>
            <br></br>
            <button type="submit">Submit</button>
        </Fragment>
    )
}

export default Welcome