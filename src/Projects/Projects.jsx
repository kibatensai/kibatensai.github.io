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

              <Project link={`https://kibatensai.github.io/typescript_todolist_2.0`} style={todoList} title={'Todo List'} description={'A todolist with authorization, error handling, data saved on backend, with default todo app features'}/>
              <Project link={`https://kibatensai.github.io/social_network_typescript_realization`} style={socialNetwork} title={'Social Network'} description={'A simple social network alike app with some features, backend storage of users'}/>
          </div>
          </Fade>
      </div>
    </div>
  );
}