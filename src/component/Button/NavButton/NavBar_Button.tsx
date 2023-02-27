import React, { FC } from 'react';
import {Link} from "react-router-dom";
import "./NavBar_module_Button.css"

interface NavBar {
    to: string;
    children?: React.ReactNode;

}

const NavBarButton: FC<NavBar> = ({ to, children }) => {
    return (

           <Link to={to} className={'button'}>
               {children}
           </Link>

    );
};

export default NavBarButton;