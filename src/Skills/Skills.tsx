import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import { Skill } from './Skill/Skill';

export const Skills = () => {
  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
          <h2 className={style.title}>Skills</h2>
          <div className={style.skills}>
              <Skill title={'React'} description={'asfsadfsafasfsaf'}/>
              <Skill title={'Redux'} description={'asfsadfsafasfsaf'}/>
              <Skill title={'JavaScript'} description={'asfsadfsafasfsaf'}/>
          </div>
      </div>
    </div>
  );
}