import React from 'react';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News"
import {Route} from "react-router-dom"
import './App.css';
import {Routes} from "react-router";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper__content'>
                <Routes>
                    <Route path="/profile"
                           element={<Profile
                               store={props.store}/>}/>
                    <Route path="/dialogs"
                           element={<DialogsContainer
                               store={props.store}/>}/>
                    <Route path="/news"
                           element={<News/>}/>
                    <Route path="/music"
                           element={<Music/>}/>
                    <Route path="/settings"
                           element={<Settings/>}/>
                    <Route path="/users"
                           element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
