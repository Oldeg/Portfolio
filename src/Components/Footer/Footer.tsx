import React from 'react';
import s from './Footer.module.scss'
import styleContainer from "../../common/styles/Container.module.css";
import {Title} from "../../common/components/Title/Title";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";


export const Footer = () => {
    return (
        <div className={s.footerBox}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <Title text={'Oleg Kozikov'}/>
                <div className={s.linksBox}>
                    <FontAwesomeIcon icon={faInstagram} style={{height: '50px'}} className={s.icon}/>
                    <FontAwesomeIcon icon={faFacebook} style={{height: '50px'}} className={s.icon}/>
                    <FontAwesomeIcon icon={faGoogle} style={{height: '50px'}} className={s.icon}/>
                </div>
                <span className={s.rights}> &copy; 2022 All rights reserved</span>
            </div>
        </div>
    );
};

