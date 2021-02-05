import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css'
import { Project } from './Project/Project';

export const Projects = () => {
  return (
    <div className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>
          <h2 className={style.title}>Projects</h2>
          <div className={style.projects}>
              <Project title={'Project Name 1'} description={'First Project Description'}/>
              <Project title={'Project Name 2'} description={'Second Project Description'}/>
          </div>
      </div>
    </div>
  );
}