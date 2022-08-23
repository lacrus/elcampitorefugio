import s from "./Footer.module.css";
import { BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className={s.contenedor}>
      <div className={s.imagen}>
        <img src="https://imgur.com/rSI2dZW.jpg" className={s.nav_logo} />
      </div>
      <div className={s.contactos}>
        <div className={s.contacto}>
          <BsWhatsapp />
          telefono
        </div>
        <div className={s.contacto}>mail</div>
        <div className={s.contacto}>localidad</div>
      </div>
      <div className={s.redes}>
        <div></div>
      </div>
    </footer>
  );
}
