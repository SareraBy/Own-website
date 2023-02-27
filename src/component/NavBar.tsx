import React from 'react';
import "../style/component/navbar.css"
import NavBarButton from "./Button/NavButton/NavBar_Button";
import BigFont from "./fonts/big_font";
import {CONTACT_ROUTE, HOME_ROUTE, INFO_ROUTE} from "../utils/route";
import {Link} from "react-router-dom";
const NavBar = () => {
    return (
        <div className={"navbar"}>
          <Link style={{textDecoration:"none"}} to={HOME_ROUTE}> <BigFont>Sarera</BigFont></Link>
            <div className={"buttonNav"}>
            <NavBarButton to={HOME_ROUTE} > Home </NavBarButton>
            <NavBarButton to={INFO_ROUTE} > Info </NavBarButton>
            <NavBarButton to={CONTACT_ROUTE} > Contact </NavBarButton>
            </div>
        </div>
    );
};

export default NavBar;