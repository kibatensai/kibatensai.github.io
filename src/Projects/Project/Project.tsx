import React from 'react';
import style from './Project.module.css';

export const Project = (props: any) => {
  return (
    <div className={style.project}>

              <div className={style.iconContainer}>
                <a className={style.clickableBtn}>Посмотреть</a>
              </div>

      <h3>{props.title}</h3>
      <span className={style.description}>{props.description}</span>  
    </div>
  );
}