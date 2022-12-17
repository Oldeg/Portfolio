import React from 'react';
import s from './Skills.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Title} from "../../common/components/Title/Title";
import tsImg from '../../assets/image/ts.png'
import htmlImg from '../../assets/image/html.png'
import reactImg from '../../assets/image/react.png'
export const Skills = () => {
    const ts = {
        backgroundImage: `url(${tsImg})`
    }
    const html = {
        backgroundImage: `url(${htmlImg})`
    }
    const react = {
        backgroundImage: `url(${reactImg})`
    }
    return (
        <div className={s.skillsBlock}>
        <div className={`${styleContainer.container} ${s.skillsContainer}`}>
            <Title text={'Skills'}/>
            <div className={s.skills}>
                <Skill title={'HTML'} description={'lorem ask cnas;c'} style={html}/>
                <Skill title={'TS'} description={'AOUSDH pia sjhf iasjc'} style={ts}/>
                <Skill title={'React'} description={'AOSHX LSHxpje pfjfje njnc'} style={react}/>

            </div>
        </div>
        </div>
    );
};
