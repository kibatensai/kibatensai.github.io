import React from 'react';
import { BurgerNavbar } from '../Navbar/BurgerNavbar/BurgerNavbar';
import { Navbar } from '../Navbar/Navbar';
import style from './Header.module.css';

export const Header = () => {
  return (
    <div className={style.header}>
       <Navbar />
       <BurgerNavbar />
    </div>
  );
}