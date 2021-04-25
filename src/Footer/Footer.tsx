import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css'

export const Footer = () => {
  return (
    <div className={style.footerBlock}>
      <div className={`${styleContainer.container} ${style.footerContainer}`}>
          <h2 className={style.title}>David Pehshvelashvili</h2>
          <div className={style.footer}>
            <div className={style.links}>
                <a href="https://www.linkedin.com/in/d-pehshvelashvili/" target="_blank">LinkedIn</a>
                <a href="https://t.me/kibatensai" target="_blank">Telegram</a>
                <a href="https://github.com/kibatensai" target="_blank">Github</a>
            </div>
            <div>
                <p>© 2021 All Rights Reserved</p>
            </div>
          </div>
      </div>
    </div>
  );
}