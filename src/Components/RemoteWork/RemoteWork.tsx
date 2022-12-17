import React from 'react';
import s from './RemoteWork.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Title} from "../../common/components/Title/Title";
export const RemoteWork = () => {
    return (
        <div className={s.workBox}>
        <div className={`${styleContainer.container} ${s.workContainer}`}>
            <Title text={'Remote work'}/>
            <a href="#" className={s.button}>Hire me</a>
        </div>
        </div>
    );
};

