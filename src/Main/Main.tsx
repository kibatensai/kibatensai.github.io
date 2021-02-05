import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'

export const Main = () => {
  return (
    <div className={style.mainBlock}>
      <div className={`${styleContainer.container} ${style.container}`}>
        <div className={style.text}>
          <span>Greetings</span>
          <h1>I am David Pehshvelashvili</h1>
          <p>Frontend JavaScript Developer</p>
        </div>
        <div className={style.photo}></div>
        </div>
    </div>
  );
}