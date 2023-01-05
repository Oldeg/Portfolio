import React from 'react';
import s from './Project.module.scss'
import Tilt from "react-parallax-tilt";

type ProjectType = {
    title: string
    description: string
    style: {
        backgroundImage: string
    }
}
export const Project: React.FC<ProjectType> = ({title, description, style}) => {

    return (
        <Tilt>
            <div className={s.project}>
                <div className={s.projectImage} style={style}>
                    <a href="#" className={s.button}>See more</a>
                </div>

                <div className={s.projectInfo}>
                    <h3 className={s.projectTitle}>{title}</h3>
                    <span className={s.description}>{description}</span>
                </div>
            </div>
        </Tilt>
    );
};

