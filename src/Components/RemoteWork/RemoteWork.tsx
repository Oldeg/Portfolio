import React from 'react';
import s from './RemoteWork.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Title} from "../../common/components/Title/Title";
import {Button} from "../../common/components/Button/Button";
export const RemoteWork = () => {
    return (
        <div className={s.workBox}>
        <div className={`${styleContainer.container} ${s.workContainer}`}>
            <Title text={'Remote work'}/>
            <Button text={'Hire me'} link={''}/>
        </div>
        </div>
    );
};

