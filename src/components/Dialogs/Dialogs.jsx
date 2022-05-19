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
    return (
        <div className={s.dialogs}>
            <div className={s.name__list}>
                <DialogItems name="Andrey" id="1"/>
                <DialogItems name="Valera" id="2"/>
                <DialogItems name="Aleksandr" id="3"/>
                <DialogItems name="Matvey" id="4"/>
                <DialogItems name="Elena" id="5"/>
                <DialogItems name="Egor" id="6"/>
                <DialogItems name="Daniil" id="7"/>
            </div>
            <div className={s.message}>
                <Message message='hi'/>
                <Message message='dfgdf'/>
                <Message message='dfh'/>
                <Message message='erter'/>
            </div>
        </div>
    )
}

export default Dialogs;
