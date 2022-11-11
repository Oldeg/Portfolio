import React from 'react';
import s from './Footer.module.css'
import styleContainer from "../Common/styles/Container.module.css";

export const Footer = () => {
    return (
        <div className={s.footerBox}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h2 className={s.name}>Oleg Kozikov</h2>
                <div className={s.linksBox}>
                    <div className={s.link}></div>
                    <div className={s.link}></div>
                    <div className={s.link}></div>
                    <div  className={s.link}></div>
                </div>
                <span className={s.rights}> &copy; 2022 All rights reserved</span>
            </div>
        </div>
    );
};

