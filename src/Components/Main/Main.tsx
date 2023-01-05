import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Button} from "../../common/components/Button/Button";
import Tilt from 'react-parallax-tilt'

export const Main = () => {
    return (
        <div className={s.mainBlock} id={'main'}>
            <div className={`${styleContainer.container} ${s.mainContainer}`}>

                <div className={s.text}>
                    <h3>Oleg <span>Kozikov</span></h3>
                    <p>Frontend developer</p>
                    <Button text={'Get Connected'}/>
                </div>

                <div className={s.imgContainer}>
                    <Tilt>
                        <div className={s.img}></div>
                    </Tilt>
                </div>

            </div>
        </div>
    );
};

