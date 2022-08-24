import React from "react";
import { NavLink } from "react-router-dom";
import logo from './../../assets/img/logo.svg';

export default function Nav() {
  return (
    <header>
      <NavLink to='/'><img src={logo} alt="Logo del campito" height="auto" width="55%" /></NavLink>
        <nav>
            <ul class="hidden" id="myLinks">
                <li> <NavLink to='/about'> Nosotros</NavLink> </li>
                <li class="hidden">|</li>
                <li> <NavLink to='/collaborate'> Colaborá</NavLink> </li>
                <li class="hidden">|</li>
                <li> <a href='https://adoptauncamperito.com.ar/' target="_blank" rel="noreferrer"> Adoptá</a></li>
                <li class="hidden">|</li>
                <li> <NavLink to='/volunteer'> Voluntariado</NavLink></li>
                <li class="hidden">|</li>
                <li> <NavLink to='/project'> Proyectos</NavLink></li>
                <li class="hidden">|</li>
                <li> <NavLink to='/contact'> Contactanos</NavLink></li>
            </ul>
        </nav>
        <a href="javascript:void(0);" onclick="myFunction()"> <i class="fas fa-bars appear fa-4xs"></i></a>
    </header>
  );
}
