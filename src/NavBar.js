import React, { Fragment } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };


function NavBar({storeName}){

    return(
        <Fragment>
        <NavLink
        to='/'
        exact
        style={linkStyles}
        activeStyle ={{background: 'darkblue'}}
        >{storeName}</NavLink>

        <NavLink
        to='/creation-station'
        exact
        style={linkStyles}
        activeStyle ={{background: 'darkblue'}}
        >Creation Station</NavLink>

        <NavLink
        to='/rockmans-tools'
        exact
        style={linkStyles}
        activeStyle ={{background: 'darkblue'}}
        >Rockman's Tools</NavLink>

        <NavLink
        to='/gadget-garden'
        exact
        style={linkStyles}
        activeStyle ={{background: 'darkblue'}}
        >Gadget Garden</NavLink>
        
        </Fragment>
    )
}

export default NavBar