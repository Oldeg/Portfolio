import React from 'react';
import s from './MyProjects.module.scss'
import checkMark from '../../assets/image/social.png'
import todoImage from '../../assets/image/check.png'
import styleContainer from '../../common/styles/Container.module.css'
import {Project} from "./Project";
import {Title} from "../../common/components/Title/Title";

export const MyProjects = () => {
    const social = {
        backgroundImage: `url(${checkMark})`
    }
    const todoIcon = {
        backgroundImage: `url(${todoImage})`
    }
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={s.projects}>
                    <Project style={social} title={'Social-network'} description={'aosbh doshds oad aosb'}/>
                    <Project style={todoIcon} title={'TodoList'} description={'Objsbd jlnsa diljnak asndfp askdn'}/>

                </div>
            </div>
        </div>
    );
};

