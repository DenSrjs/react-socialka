import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {
    let path = "dialogs/1" + props.id;
    return (
        <div className={s.name__item + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message =(props)=>{
    return <div className={s.message__item}>{props.message}</div>
}

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: "Matvey"},
        {id: 2, name: "Egor"},
        {id: 3, name: "Daniil"},
    ]
    let messageData = [
        {id: 1, message: "hi"},
        {id: 2, message: "dfgdf"},
        {id: 3, message: "qwewe"},
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.name__list}>
                <DialogItems name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItems name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItems name={dialogsData[2].name} id={dialogsData[2].id}/>
            </div>
            <div className={s.message}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
            </div>
        </div>
    )
}

export default Dialogs;
