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

const Message = (props) => {
    return <div className={s.message__item}>{props.message}</div>
}

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: "Matvey"},
        {id: 2, name: "Egor"},
        {id: 3, name: "Daniil"},
    ]


    let messages = [
        {id: 1, message: "hi"},
        {id: 2, message: "dfgdf"},
        {id: 3, message: "qwewe"},
    ]

    let dialogsElement = dialogs.map(d => <DialogItems name={d.name} id={d.id}/>);
    let messagesElement = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.name__list}>
                {dialogsElement}
            </div>
            <div className={s.message}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;
