import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.name__list}>
                <div className={s.name__item + ' ' + s.active}>
                    <NavLink to="dialogs/1">Andrey</NavLink>
                </div>
                <div className={s.name__item}>
                    <NavLink to="/dialogs/2">Valera</NavLink>
                </div>
                <div className={s.name__item}>
                    <NavLink to="/dialogs/3">Aleksandr</NavLink>
                </div>
                <div className={s.name__item}>
                    <NavLink to="/dialogs/4">Matvey</NavLink>
                </div>
                <div className={s.name__item}>
                    <NavLink to="/dialogs/5">Elena</NavLink>
                </div>
            </div>
            <div className={s.message}>
                <div className={s.message__item}>Hi</div>
                <div className={s.message__item}>Hello</div>
                <div className={s.message__item}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;
