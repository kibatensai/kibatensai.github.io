import React from 'react';
import style from './Project.module.scss';

export const Project = (props: any) => {
  return (
    <div className={style.project}>
      <div className={style.iconContainer} style={props.style}>
        <a href={props.link} className={style.clickableBtn} target='_blank'>Have a look</a>
      </div>
      <div className={style.projectInfo}>
        <h3 className={style.projectTitle}>{props.title}</h3>
        <span className={style.description}>{props.description}</span>
      </div>
    </div>
  );
}