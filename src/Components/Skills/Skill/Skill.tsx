import React from 'react';
import s from './Skill.module.scss'

type SkillPropsType = {
    title: string
    description: string
    style: {
        backgroundImage: string
    }
}
export const Skill: React.FC<SkillPropsType> = ({title, description, style}) => {
    return (
        <div className={s.skill}>
            <div className={s.icon} style={style}></div>
            <h3>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
};

