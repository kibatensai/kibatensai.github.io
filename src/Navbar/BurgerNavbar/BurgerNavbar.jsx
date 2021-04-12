import React, { useState } from "react";
import style from "./BurgerNavbar.module.scss";
import { Link } from "react-scroll";
import menu from './../../assets/menu.svg'

export const BurgerNavbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const onBurgerBtnClick = () => {
    setMenuIsOpen(() => !menuIsOpen)
    console.log(menuIsOpen)
  }


  return (
    <div className={style.burgerNavbar}>
    <div className={menuIsOpen ? `${style.burgerNavbarItems} ${style.show}` : style.burgerNavbarItems}>
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
    <div onClick={onBurgerBtnClick} className={style.burgerBtn}>
      <img src={menu}/>
    </div>
    </div>
  );
};
