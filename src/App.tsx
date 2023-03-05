import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import {publicRoutes} from "./route";
import Loader from "./pages/Loader";


function App() {
    return (
        <Routes>

            {publicRoutes.map(({path, Component}) => (

                <Route
                    key={path}
                    path={path}
                    element={
                    <React.Suspense fallback={<Loader/>}>
                        <Component/>
                </React.Suspense>}
                />
            ))}
        </Routes>
    );
}

export default App;
