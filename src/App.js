import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
// rrd
import { BrowserRouter as Router } from "react-router-dom";

import AnimatedRoutes from "./components/AnimatedRoutes";
import Footer from "./components/Footer/Footer";

import { Context } from "./context/CartContext";


const App = () => {
    return <div className="app">
            <Router>
                <Context>
                    <Header />
                        <AnimatedRoutes />
                    <Footer />
                </Context>
            </Router> 
    </div>;
};

export default App