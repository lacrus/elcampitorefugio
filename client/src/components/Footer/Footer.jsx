import s from "./Footer.module.css";
import {
  BsWhatsapp,
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsTwitter,
} from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";

import imagen from "../../recursos/imagenes/perroSinBordes.png";

export default function Footer() {
  return (
    <footer className={s.contenedor}>
      <div className={s.contenedorImagen}>
        <img src={imagen} className={s.imagen} alt="cara perro" />
      </div>
      <div className={s.contactos}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className={s.contacto}
        >
          <BsWhatsapp color="#ff9900" className={s.iconos} />
          <div>+54 9 11 12345678</div>
        </a>
        <a
          href="mailto:refugioelcampito@gmail.com?Subject=Contacto%20via%20pagina%20web"
          target="_blank"
          rel="noopener noreferrer"
          className={s.contacto}
        >
          <AiOutlineMail color="#ff9900" className={s.iconos} />
          <div>mail@gmail.com</div>
        </a>
        <a
          href="https://www.google.com/maps/dir//refugio+el+campito/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x95bcd524123fd69d:0xc8636b72951eb39b?sa=X&ved=2ahUKEwjXiNm96935AhU0uZUCHb2ACrgQ9Rd6BAhgEAU"
          target="_blank"
          rel="noopener noreferrer"
          className={s.contacto}
        >
          <GoLocation color="#ff9900" className={s.iconos} />
          <div>localidad</div>
        </a>
      </div>
      <div className={s.contenedorRedes}>
        <div>¡Seguinos!</div>
        <div className={s.redes}>
          <a
            href="https://www.google.com/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram color="#ff9900" size="20px" />
          </a>
          <a
            href="https://www.google.com/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook color="#ff9900" size="20px" />
          </a>
          <a
            href="https://www.google.com/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsYoutube color="#ff9900" size="20px" />
          </a>
          <a
            href="https://www.google.com/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitter color="#ff9900" size="20px" />
          </a>
        </div>
      </div>
    </footer>
  );
}
