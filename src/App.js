import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
// rrd
import { BrowserRouter as Router } from "react-router-dom";

import AnimatedRoutes from "./components/AnimatedRoutes";
import Footer from "./components/Footer/Footer";

const App = () => {
    return <div className="app">
        <Router>
            <Header />
                  <AnimatedRoutes />
            <Footer />
        </Router>
    </div>;
};

export default App