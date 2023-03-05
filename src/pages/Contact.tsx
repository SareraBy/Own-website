import React from 'react';
import Small_font from "../component/fonts/small_font";
import Middle_font from "../component/fonts/middle_font";
import {Link} from "react-router-dom";


const Contact = () => {
    return (

        <div style={{color:"white", textAlign:"center", marginTop:"170px"}}>

         <Middle_font>Email: sarerabib@gmail.com</Middle_font>
            <Link to={'https://t.me/gordey_i'}>Telegram</Link>
            <br/>
             <Link to={'https://github.com/SareraBy'}> Github</Link>

        </div>
    );
};

export default Contact;