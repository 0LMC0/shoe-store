import "./contact.css"
import { motion as m } from "framer-motion"
// emailJs
import { useRef } from "react"
import emailjs from "emailjs-com"
import logo from '../../assets/logoZpste.svg'
// sweetalert
import swal from 'sweetalert';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('zpste', 'template_mn1y3oo', form.current, 'Ci3hWyF6_Aufq63Ll')

    e.target.reset()

    swal("Su mensaje fue enviado!", "Le responderemos lo antes posible!", "Enviado");
  };


  return (
    <section>
      <m.div
          initial={{opacity:0, y : 100}} 
          animate={{opacity:1, y: 0 }} 
          transition={{duration: 2, ease: "easeIn"}}
          exit={{ opacity:0, y: "-100%",  transition:{duration: 0.5}}}
      className="container contact_container">
      <form ref={ form } onSubmit={ sendEmail }>
      <img className="logo-contact" src={logo} alt="" />
      <h2 className="title-contact">Te quedaste con dudas?</h2>
      <h2 className="subtitle-contact">Deja tu consulta aqui debajo y nos estaremos contactando en breve!</h2>
          <input type="text" name="name" placeholder="Nombre Completo" required/>
          <input type="email" name="email" placeholder="E-mail" required/>
          <input type="number" name="number" placeholder="Numero telefonico" required/>
          <textarea name="message" rows="7" placeholder="Tu mensaje / consulta..." required></textarea>
          <button type="submit" className="submit-contact">Enviar</button>
        </form>
      </m.div>
    </section>

  )
}

export default Contact