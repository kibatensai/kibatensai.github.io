import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import { Project } from './Project/Project';
import { Title } from '../common/components/title/Title';
import socialNetImage from './../assets/images/social.png'
import todoListImage from './../assets/images/tdlist.png'
import Fade from 'react-reveal/Fade'

export const Projects = () => {
  const socialNetwork = {
    backgroundImage: `url(${socialNetImage})`

  }

  const todoList = {
    backgroundImage: `url(${todoListImage})`

  }

  return (
    <div id='projects' className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>
      <Title title={'Projects'}/>
          <Fade right>
          <div className={style.projects}>
              <Project style={socialNetwork} title={'Social Network'} description={'First Project Description First Project Description First Project Description First Project Description '}/>
              <Project style={todoList} title={'Todo List'} description={'Second Project Description Second Project Description Second Project Description Second Project Description '}/>
          </div>
          </Fade>
      </div>
    </div>
  );
}