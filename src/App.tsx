import React from 'react';
import s from './App.module.css'
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";
import {Main} from "./Components/Main/Main";
import {Skills} from "./Components/Skills/Skills";
import {MyProjects} from "./Components/MyProjects/MyProjects";
import {RemoteWork} from "./Components/RemoteWork/RemoteWork";
import {Contacts} from "./Components/Contacts/Contacts";

function App() {
    return (
        <div className={s.App} >
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects/>
            <RemoteWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
