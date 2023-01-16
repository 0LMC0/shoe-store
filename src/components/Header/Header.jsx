import React, { useState } from 'react'
import "./header.css"
import logo from "../../assets/logoZpste.svg"
// rrd
import { NavLink } from 'react-router-dom'
// reacticons
import {AiFillCaretDown} from 'react-icons/ai'
import {BiHomeAlt} from 'react-icons/bi'
import {RiContactsLine} from 'react-icons/ri'



const Header = () => {
 
const navActive = ({ isActive }) => isActive ? 'headerTabActive headerTab' : 'headerTab';

  return (
    <div className='header'>
      <img 
       src={logo} 
       alt="@zpste" 
       className='HeaderLogo' 
       />

       <div className='headerTabsContainer'>
        <NavLink className={navActive} to="/"><BiHomeAlt className='icons-header'/> Home</NavLink>
        <NavLink className={navActive} to="/zapatillas"><AiFillCaretDown className='icons-header'/> Zapatillas <AiFillCaretDown className='downarrow-zapatillas'/></NavLink>
        <NavLink className={navActive} to="/contacto"><RiContactsLine className='icons-header' /> Contacto</NavLink>
       </div>
    </div>
  )
}

export default Header