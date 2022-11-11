import React from 'react';
import s from './RemoteWork.module.css'
import styleContainer from '../Common/styles/Container.module.css'
export const RemoteWork = () => {
    return (
        <div className={s.workBox}>
        <div className={`${styleContainer.container} ${s.workContainer}`}>
            <h2 className={s.title}>Looking for a remote work variants</h2>
            <a href="#" className={s.button}>Hire me</a>
        </div>
        </div>
    );
};

