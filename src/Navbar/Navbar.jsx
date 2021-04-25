import React from "react";
import style from "./Navbar.module.scss";
import githubicon from './../assets/icons8-github.svg'
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <div>
    <div className={style.iconContainer}>
    <a className={style.githubIcon} href='https://github.com/kibatensai' target='_blank' rel='noreferrer'><img src={githubicon} alt='gh_icon'/></a>
    </div>
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
    </div>
  );
};
