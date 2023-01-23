import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
// pages
import MainFold from "../pages/MainFold/MainFold"
import Contact from "../pages/Contact/Contact"
import Zapatillas from "../pages/zapatillas/Zapatillas";
import NotFound from "../pages/notFound/NotFound";
import Myrst from "../pages/mayorista/Myrst";
// fm
import { AnimatePresence } from "framer-motion";
import DetailContainer from '../pages/zapatillas/Detail/DetailContainer/DetailContainer';
import Cart from './cart/Cart';

const AnimatedRoutes = () => {

    const location = useLocation();

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<MainFold />} />
            <Route path="/zapatillas/:productId" element={<DetailContainer />}/>
            <Route path="/zapatillas" element={<Zapatillas />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/mayoristas" element={<Myrst />} />
            <Route path='/carrito' element={<Cart />}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes