import React, { ChangeEvent, useState } from 'react';
import { Title } from '../common/components/title/Title';
import styleContainer from '../common/styles/Container.module.css';
import style from './Contacts.module.scss';
import axios from 'axios'

export const Contacts = (props: any) => {
  const [details, setDetails] = useState({ name: '', email: '', message: ''})

  const nameOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, name: e.target.value })
}

const emailOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, email: e.target.value })
}

const messageOnChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDetails({ ...details, message: e.target.value })
}

const detailsWrap = (e: any) => {
    axios.post(`https://gmail-smtp-server.herokuapp.com/sendMessage`, details)
    setDetails({name: '', email: '', message: ''})
}

  return (
    <div id='contacts' className={style.contactsBlock}>
        <div className={`${styleContainer.container} ${style.contactsContainer}`}>
              <Title title={'Contacts'}/>
              <div className={style.form_container}>

                <div className={style.top}></div>
                <div className={style.bottom}></div>

                <form className={style.contactsForm}>
                    <input type={'text'} placeholder={'Name'} onChange={nameOnChangeHandler}/>
                    <input type={'text'} placeholder={'E-mail'} onChange={emailOnChangeHandler}/>
                    <textarea placeholder={'Your message'}
                                rows={4} cols={100}  onChange={messageOnChangeHandler}/>
                    <a href='#' className={style.clickableBtn} onClick={detailsWrap}>Send Message</a>
                </form>
              </div>
        </div>
    </div>
  );
}