import React from 'react';
import s from './Contacts.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Title} from "../../common/components/Title/Title";

export const Contacts = () => {
    return (
        <div className={s.contactsBox}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <Title text={'Contacts'}/>
                <form className={s.form}>
                    <input type="text"/>
                    <input type="text" className={s.input}/>
                    <textarea className={s.text}></textarea>
                    <button className={s.button} type='submit' >Send</button>
                </form>

            </div>
        </div>
    );
};

