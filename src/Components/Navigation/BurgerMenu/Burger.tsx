import React, {useState} from 'react';
import s from './Burger.module.scss'
import {Link} from "react-scroll";

export const Burger = () => {
    let [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
    const onClickButtonHandler = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    return (
        <div className={s.burger}>
            <div className={ menuIsOpen ?`${s.show} ${s.burgerItems}`: s.burgerItems}>
                <Link className={s.link} activeClass={s.active} to="main" spy={true} smooth={true} hashSpy={true}
                      offset={-79} duration={500}>Main</Link>

                <Link className={s.link} activeClass={s.active} to="skills" spy={true} smooth={true} hashSpy={true}
                      offset={-79} duration={500}> Skills </Link>

                <Link className={s.link} activeClass={s.active} to="projects" spy={true} smooth={true}
                      hashSpy={true} offset={-79} duration={500}>Projects</Link>

                <Link className={s.link} activeClass={s.active} to="contacts" spy={true} smooth={true}
                      hashSpy={true} offset={-79} duration={500}>Contacts</Link>

            </div>
            <div className={s.burgerBtn} onClick={onClickButtonHandler}></div>
        </div>

    );
};

