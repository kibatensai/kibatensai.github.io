import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import { Title } from '../common/components/title/Title';

export const Contacts = (props: any) => {
  return (
    <div id='contacts' className={style.contactsBlock}>
        <div className={`${styleContainer.container} ${style.contactsContainer}`}>
              <Title title={'Contacts'}/>
              <div className={style.form_container}>

                <div className={style.top}></div>
                <div className={style.bottom}></div>

                <form className={style.contactsForm}>
                    <input type={'text'} placeholder={'Name'} />
                    <input type={'text'} placeholder={'E-mail'} />
                    <textarea placeholder={'Your message'}
                                rows={2} cols={22} />
                    <a href='#' className={style.clickableBtn}>Send Message</a>
                </form>
              </div>
        </div>
    </div>
  );
}