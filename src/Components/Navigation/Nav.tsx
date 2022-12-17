import React from 'react';
import s from './Nav.module.scss'
import styleContainer from "../../common/styles/Container.module.css";

export const Nav = () => {
    return (
        <div className={styleContainer.container}>
            <div className={s.nav}>
                <span><a href="" className={s.link}>Main</a></span>
                <span><a href="" className={s.link}>Skills</a></span>
                <span><a href="" className={s.link}>Projects</a></span>
                <span><a href="" className={s.link}>Contacts</a></span>

            </div>
        </div>
    );
};

