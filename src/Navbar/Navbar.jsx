import React from "react";
import style from "./Navbar.module.scss";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <div className={style.navbar}>
      <Link
        className={style.nav_link}
        activeClass={style.active}
        to="main"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
          Main
      </Link>
      <Link
        className={style.nav_link}
        activeClass={style.active}
        to="skills"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
          Skills
      </Link>
      <Link
        className={style.nav_link}
        activeClass={style.active}
        to="projects"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
          Projects
      </Link>
      <Link
        className={style.nav_link}
        activeClass={style.active}
        to="contacts"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
          Contacts
      </Link>
    </div>
  );
};
