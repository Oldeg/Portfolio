import React from 'react';
import s from './Button.module.scss'
type ButtonType = {
    text: string
    link?:string
}
export const Button:React.FC<ButtonType> = ({text,link}) => {
    return (
        <a href={link} className={s.btn}><span>{text}</span></a>
    );
};

