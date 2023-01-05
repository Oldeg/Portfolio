import React from 'react';
import s from "./Header.module.scss";
import {Nav} from "../Navigation/Nav";
import {Burger} from "../Navigation/BurgerMenu/Burger";

export const Header = () => {
    return (
        <div className={s.header}>
            <Nav/>
            <Burger/>
        </div>
    );
};

