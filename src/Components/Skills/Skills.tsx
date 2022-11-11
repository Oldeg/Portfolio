import React from 'react';
import s from './Skills.module.css'
import styleContainer from '../Common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
        <div className={`${styleContainer.container} ${s.skillsContainer}`}>
            <h2 className={s.title}>Skills</h2>
            <div className={s.skills}>
                <Skill title={'HTML/CSS'} description={'lorem ask cnas;c'}/>
                <Skill title={'JS'} description={'AOUSDH pia sjhf iasjc'}/>
                <Skill title={'React'} description={'AOSHX LSHxpje pfjfje njnc'}/>

            </div>
        </div>
        </div>
    );
};
