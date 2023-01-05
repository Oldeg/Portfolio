import React from 'react';
import s from './Skill.module.scss'
import Tilt from "react-parallax-tilt";

type SkillPropsType = {
    title: string
    description: string
    style: {
        backgroundImage: string
    }
}
export const Skill: React.FC<SkillPropsType> = ({title, description, style}) => {
    return (
        <Tilt>
            <div className={s.skill}>
                <div className={s.icon} style={style}></div>
                <h3>{title}</h3>
                <span className={s.description}>{description}</span>
            </div>
        </Tilt>
    );
};

