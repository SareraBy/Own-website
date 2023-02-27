import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import NavBar from "./component/NavBar";
import Middle_font from "./component/fonts/middle_font";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<BrowserRouter>
    <NavBar/>
    <h3 style={{color:"white", textAlign:"center", marginTop:"170px"}}>
        Coming soon

       <br/> <p style={{color:"white", textAlign:"center", fontSize:"12px"}} > The page is not ready yet. Everything will be in the future. </p>

    </h3>

    <App />
</BrowserRouter>
);

