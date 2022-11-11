import React from 'react';
import s from './Project.module.css'
type ProjectType  = {
    title : string
    description: string
}
export const Project = (props: ProjectType) => {
    return (
        <div className={s.project}>
            <div className={s.projectImage}>
                <a href="#" className={s.button}>Watch</a>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};

