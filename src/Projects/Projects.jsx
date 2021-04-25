import React from "react";
import style from "./Projects.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import { Project } from "./Project/Project";
import { Title } from "../common/components/title/Title";
import socialNetImage from "./../assets/images/social.png";
import todoListImage from "./../assets/images/tdlist.png";
import currConvImage from "./../assets/images/currconvimage.jpg";
import counterImage from "./../assets/images/counterImage.png";
import stardbImage from "./../assets/images/stardbImage.PNG";
import fridayfeverImage from "./../assets/images/fridayfeverImage.PNG";
import Fade from "react-reveal/Fade";

export const Projects = () => {
  const socialNetwork = {
    backgroundImage: `url(${socialNetImage})`,
  };

  const todoList = {
    backgroundImage: `url(${todoListImage})`,
  };

  const currConverter = {
    backgroundImage: `url(${currConvImage})`,
  };

  const reduxCounter = {
    backgroundImage: `url(${counterImage})`,
  }

  const starwarsDB = {
    backgroundImage: `url(${stardbImage})`,
  }

  const fridayFever = {
    backgroundImage: `url(${fridayfeverImage})`,
  }


  return (
    <div id="projects" className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>
        <Title title={"Projects"} />
        <Fade right>
          <div className={style.projects}>
            <Project
              link={`https://kibatensai.github.io/fridayfever`}
              style={fridayFever}
              title={"Cards for Learning"}
              description={
                "A simple realization of quizlet alike app for learning. Making own packs, cards with individual questions, answering them and giving them grades"
              }
            />
            <Project
              link={`https://kibatensai.github.io/typescript_todolist_2.0`}
              style={todoList}
              title={"Todo List"}
              description={
                "A todolist with authorization, error handling, data saved on backend, with default todo app features"
              }
            />
            <Project
              link={`https://kibatensai.github.io/social_network_typescript_realization`}
              style={socialNetwork}
              title={"Social Network"}
              description={
                "A simple social network alike app with some features, backend storage of users"
              }
            />
            <Project
              link={`http://kibatensai.github.io/basic_currency_converter`}
              style={currConverter}
              title={"Currency Converter"}
              description={
                "A basic currency converter with minimal UI for practicing"
              }
            />
            <Project
              link={`https://kibatensai.github.io/redux_ts_counter`}
              style={reduxCounter}
              title={"[Old] Counter"}
              description={
                "First trial to React Redux link"
              }
            />
            <Project
              link={`https://kibatensai.github.io/starwars_database_reactprac`}
              style={starwarsDB}
              title={"[Old] StarWars Database"}
              description={
                "Raw implementation of StarWars Universe Database. First interaction with React and API functioning"
              }
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};
