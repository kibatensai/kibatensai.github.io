import style from "./Main.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import Particles from "react-particles-js";
import Fade from "react-reveal/Fade";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-tilt";

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1200,
      },
    },
  },
};

export const Main = () => {
  return (
    <div id='main' className={style.mainBlock}>
      <Particles className={style.particles} params={particlesOptions} />
      <Fade top>
        <div className={`${styleContainer.container} ${style.container}`}>
          <div className={style.text}>
            <span>Greetings</span>
            <h1>
              I am David <span>Pehshvelashvili</span>
            </h1>
            <ReactTypingEffect
              text="Frontend JavaScript Developer"
              typingDelay={"3500"}
              speed={"100"}
            />
          </div>
          <Tilt className={'Tilt'} options={{ max: 15, speed: 200 }}>
            <div className={style.photo}>
              <div className={style.image}></div>
            </div>
          </Tilt>
        </div>
      </Fade>
    </div>
  );
};
