import React from 'react';
import s from './Nav.module.scss'
import {Link} from "react-scroll";

export const Nav = () => {
    return (
        <div className={s.nav}>
            <Link className={s.link}
                  activeClass={s.active}
                  to="main"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-79}
                  duration={500}
            >Main</Link>
            <Link className={s.link}
                  activeClass={s.active}
                  to="skills"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-79}
                  duration={500}
            >Skills</Link>

            <Link className={s.link}
                  activeClass={s.active}
                  to="projects"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-79}
                  duration={500}
            >Projects</Link>

            <Link className={s.link}
                  activeClass={s.active}
                  to="contacts"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-79}
                  duration={500}
            >Contacts</Link>

        </div>

    );
};

