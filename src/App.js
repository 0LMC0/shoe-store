import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
// rrd
import { BrowserRouter as Router } from "react-router-dom";

import AnimatedRoutes from "./components/AnimatedRoutes";

const App = () => {
    return <div className="app">
        <Router>
            <Header />
            <AnimatedRoutes />
        </Router>
    </div>;
};

export default App