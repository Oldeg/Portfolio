import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${styleContainer.container} ${s.mainContainer}`}>

                <div className={s.text}>
                    <h3>Oleg <span>Kozikov</span></h3>
                    <p>Frontend developer</p>
                </div>
                <div className={s.imgContainer}>
                    <div className={s.img}></div>
                </div>
            </div>
        </div>
    );
};

