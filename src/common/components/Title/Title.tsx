import React from 'react';
import s from "./Title.module.scss";

type TitleType = {
    text: string
}
export const Title: React.FC<TitleType> = ({text}) => {
    return (
        <div className={s.title}>
            <h3>{text}</h3>
        </div>
    );
};

