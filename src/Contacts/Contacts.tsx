import React from 'react';
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css'

export const Contacts = (props: any) => {
  return (
    <div className={style.contactsBlock}>
        <div className={`${styleContainer.container} ${style.contactsContainer}`}>
            <h2 className={style.title}>Contacts</h2>
            <form className={style.contactsForm}> 
                <input type={'text'} placeholder={'Name'} />
                <input type={'text'} placeholder={'E-mail'} />
                <textarea placeholder={'Your message'}
                            rows={5} cols={22} />
                <a className={style.clickableBtn}>Send Message</a>
            </form>
        </div>
    </div>
  );
}