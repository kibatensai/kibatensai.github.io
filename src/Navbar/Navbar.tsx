import React from 'react';
import style from './Navbar.module.css';

export const Navbar = () => {
  return (

    <div className={style.navbar}>
       <a className={style.nav_link}href="">Main</a>
       <a className={style.nav_link}href="">Skills</a>
       <a className={style.nav_link}href="">Projects</a>
       <a className={style.nav_link}href="">Contacts</a>
    </div>

  );
}