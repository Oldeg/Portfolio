import React from 'react';
import s from './Contacts.module.css'
import styleContainer from '../Common/styles/Container.module.css'
export const Contacts = () => {
    return (
        <div className={s.contactsBox}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
           <h2 className={s.title}>Contacts</h2>
                <form className={s.form}>
                    <input type="text" />
                    <input type="text" className={s.input}/>
                    <textarea className={s.text}></textarea>
                </form>
                <a href="#" className={s.button}>Send</a>
            </div>
        </div>
    );
};

