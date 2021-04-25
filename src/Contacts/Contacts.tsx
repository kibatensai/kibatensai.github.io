import React, { ChangeEvent, useState } from 'react';
import { Title } from '../common/components/title/Title';
import styleContainer from '../common/styles/Container.module.css';
import style from './Contacts.module.scss';
import axios from 'axios'


export const Contacts = ({onSnackBarShow}: any) => {
  const [details, setDetails] = useState({ name: '', email: '', message: ''})

  const [dis, onDis] = useState(false)

  const nameOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, name: e.target.value })
}

const emailOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, email: e.target.value })
}

const messageOnChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDetails({ ...details, message: e.target.value })
}

const detailsWrap = async (e: any) => {
    e.preventDefault();
    onDis(true)
    await axios.post(`https://gmail-smtp-server.herokuapp.com/sendMessage`, details)
    setDetails({name: '', email: '', message: ''})
    onDis(false)
    onSnackBarShow(true)
    setTimeout(() => {
      onSnackBarShow(false)
    }, 3000)
}

  return (
    <div id='contacts' className={style.contactsBlock}>
        <div className={`${styleContainer.container} ${style.contactsContainer}`}>
              <Title title={'Contacts'}/>
              <div className={style.form_container}>

                <div className={style.top}></div>
                <div className={style.bottom}></div>

                <form className={style.contactsForm}>
                    <input type={'text'} placeholder={'Name'} value={details.name} onChange={nameOnChangeHandler}/>
                    <input type={'text'} placeholder={'E-mail'} value={details.email} onChange={emailOnChangeHandler}/>
                    <textarea placeholder={'Your message'}
                                rows={4} cols={100}  value={details.message} onChange={messageOnChangeHandler}/>
                    {/* @ts-ignore */}
                    <a href='#' disabled={dis} className={style.clickableBtn} onClick={detailsWrap}>Send Message</a>
                </form>
              </div>
        </div>

    </div>
  );
}