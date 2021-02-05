import React from 'react';
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css'

export const Contacts = (props: any) => {
  return (
    <div className={style.contactsBlock}>
        <div className={`${styleContainer.container} ${style.contactsContainer}`}>
            <h2 className={style.title}>Contacts</h2>
            <form className={style.contacts}>
                    <div>
                        <input placeholder={'Name'} />
                    </div>
                    <div>
                        <input placeholder={'E-mail'} />
                    </div>
                    <div>
                        <textarea placeholder={'Your message'}
                                rows={5} cols={22} />
                        </div>
                    <div>
                        <button>Send Message</button>
                </div>
            </form>
        </div>
    </div>
  );
}