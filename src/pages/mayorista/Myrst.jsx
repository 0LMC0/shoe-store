import "./myrst.css"
import { motion as m } from "framer-motion"

import { Link } from "react-router-dom"

import logo from '../../assets/logoZpste.svg'

import {BsFillCaretDownFill} from 'react-icons/bs'
import {ImUserCheck} from 'react-icons/im'



const Myrst = () => {

  return (
    <section>
      <m.div
      initial={{ y: 100, x : 100}} 
      animate={{ y: 0, x: 0 }} 
      transition={{duration: 0.5, ease: "easeIn"}}
      exit={{ x: "-100%",  transition:{duration: 0.5}}}
      className="container myrst_container">
      <form>
      <img className="logo-myrst" src={logo} alt="" />
      <h2 className="title-myrst">seccion revendedores <ImUserCheck className="icon-myrst"/></h2>
          <input type="text" name="name" placeholder="Usuario (E-mail)" required/>
          <input type="password" name="password" placeholder="Contraseña" required/>
          <a className="pass-forgot" href="www.google.com" rel="noreferrer">Olvidaste tu contraseña?</a>          
            <button type="submit" className="submit-myrst">Entrar</button>
          <div className="info-myrst">
            <h3>no sos revendedor/a?</h3>
            <p><BsFillCaretDownFill className='icon-myrst'/> llena el formulario y forma parte de nuestro equipo <BsFillCaretDownFill className='icon-myrst'/> </p>
          </div>
        </form>
        <form>
      <h2 className="title-myrst">Registrate como revendedor/a</h2>
      <h2 className="subtitle-myrst"> y un representante de nuestro equipo se estara contactando con vos!</h2>
          <input type="text" name="name" placeholder="Nombre y Apellido" required/>
          <input type="email" name="email" placeholder="E-mail" required/>
          <input type="number" name="phoneNumber" placeholder="Telefono" required/>
          <input type="password" name="password" placeholder="Crear contraseña" required/>
          <input type="password" name="password" placeholder="Repetir Contraseña" required/>
          <button type="submit" className="submit-myrst">Enviar</button>
          <Link className="contact-button-to" to='/contact0'>Te quedo alguna duda? Hace click aca!</Link>          
        </form>
      </m.div>
    </section>

  )
}

export default Myrst