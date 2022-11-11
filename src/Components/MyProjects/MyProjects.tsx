import React from 'react';
import s from './MyProjects.module.css'

import styleContainer from '../Common/styles/Container.module.css'
import {Project} from "./Project";
export const MyProjects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.projects}>
                    <Project title={'Social-network'} description={'aosbh doshds oad aosb'}/>
                    <Project title={'TodoList'} description={'Objsbd jlnsa diljnak asndfp askdn'}/>
                    <Project title={'Store'} description={'OJBJ Onalkn dasnd k;mm sa;l'}/>
                </div>
            </div>
        </div>
    );
};

