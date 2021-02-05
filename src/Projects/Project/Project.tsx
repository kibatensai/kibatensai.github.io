import React from 'react';
import style from './Project.module.css';

export const Project = (props: any) => {
  return (
    <div className={style.project}>
            <a href="#">
              <div className={style.icon}>
              </div>
            </a>
      <h3>{props.title}</h3>
      <span className={style.description}>{props.description}</span>  
    </div>
  );
}