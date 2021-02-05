import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import style from './Header.module.css';

export const Header = () => {
  return (
    <div className={style.header}>
       <Navbar />
    </div>
  );
}