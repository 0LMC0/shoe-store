import React from "react";
import Header from "./components/Header/Header";
import Footer from "./pages/MainFold/Footer/Footer"
// pages
import MainFold from "./pages/MainFold/MainFold"
import Contact from "./pages/Contact/Contact"
import Zapatillas from "./pages/zapatillas/Zapatillas";
import "./App.css";
// rrd
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/notFound/NotFound";
import Myrst from "./pages/mayorista/Myrst";

const App = () => {
    return <div className="app">
        <Router>
            <Header />
                <Routes>
                    <Route path="/" element={<MainFold />} />
                    <Route path="/zapatillas" element={<Zapatillas />} />
                    <Route path="/contacto" element={<Contact />} />
                    <Route path="/mayoristas" element={<Myrst />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
        </Router>
    </div>;
};

export default App