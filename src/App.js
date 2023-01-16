import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
// pages
import MainFold from "./pages/MainFold/MainFold"
import Contact from "./pages/Contact/Contact"
import Zapatillas from "./pages/zapatillas/Zapatillas";
import "./App.css";
// rrd
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/notFound/NotFound";

const App = () => {
    return <div className="app">
        <Router>
            <Header />
                <Routes>
                    <Route path="/" element={<MainFold />} />
                    <Route path="/zapatillas" element={<Zapatillas />} />
                    <Route path="/contacto" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            <Footer />
        </Router>
    </div>;
};

export default App