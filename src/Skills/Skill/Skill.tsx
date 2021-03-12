import React from 'react';
import style from './Skill.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


export const Skill = (props: any) => {
  return (
    <div className={style.skill}>
      <div className={style.icon}>
        <FontAwesomeIcon icon={props.icon}
                        size={'5x'}
                        color={'#ab10b9'}/>
      </div>
      <h3>{props.title}</h3>
      <span className={style.description}>{props.description}</span>
    </div>
  );
}