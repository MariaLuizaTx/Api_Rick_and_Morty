import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Components/Home";
import Api from "./Components/Api";

export default class Rotas extends React.Component{
    render(){
        return(
            <>
                <BrowserRouter>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/personagens">Api</Link>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/personagens" element={<Api/>} />
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}