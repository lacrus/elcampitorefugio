import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={s.nav_container}>
      <div className={s.nav_logo_container}>
        <img
          src="https://imgur.com/rSI2dZW.jpg"
          className={s.nav_logo}
          alt=""
        />
      </div>
      <div className={s.nav_menu}>
        <NavLink to="/" className={s.nav_menu_item}>
          Test
        </NavLink>
        |{" "}
        <NavLink to="/" className={s.nav_menu_item}>
          Test
        </NavLink>
        |
        <NavLink to="/" className={s.nav_menu_item}>
          Test
        </NavLink>
        |{" "}
        <NavLink to="/" className={s.nav_menu_item}>
          Test
        </NavLink>
        |
        <NavLink to="/" className={s.nav_menu_item}>
          Test
        </NavLink>
        |{" "}
        <NavLink to="/" className={s.nav_menu_item}>
          Test
        </NavLink>
      </div>
    </nav>
  );
}
