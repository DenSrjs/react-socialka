import React from 'react';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom"
import './App.css';
import {Routes} from "react-router";

const App =(props)=> {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <div className='app-wrapper__content'>
          <Routes>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/dialogs" element={<Dialogs/>}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;
