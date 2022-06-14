import React from 'react';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News"
import {Route} from "react-router-dom"
import './App.css';
import {Routes} from "react-router";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper__content'>
                <Routes>
                    <Route path="/profile"
                           element = {<Profile
                               state={props.state.profilePage}/> }/>
                    <Route path="/dialogs"
                           element={<Dialogs
                               state = {props.state.dialogsPage}/>}/>
                    <Route path="/news"
                           element={<News/>}/>
                    <Route path="/music"
                           element={<Music/>}/>
                    <Route path="/settings"
                           element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
