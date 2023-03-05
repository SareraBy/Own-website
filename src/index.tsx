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
    <App />
</BrowserRouter>
);

