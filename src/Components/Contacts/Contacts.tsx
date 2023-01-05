import React from 'react';
import s from './Contacts.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Title} from "../../common/components/Title/Title";

export const Contacts = () => {
    return (
        <div className={s.contactsBox} id={'contacts'}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <Title text={'Contacts'}/>
                <form className={s.form}>
                    <input type="text" className={s.input} placeholder={'Your Name'}/>
                    <input type="text" className={s.input} placeholder={'Your Email'}/>
                    <textarea className={s.text} placeholder={'Write your message here'}></textarea>
                    <button className={s.button} type='submit' ><span>Submit Now</span></button>
                </form>

            </div>
        </div>
    );
};

