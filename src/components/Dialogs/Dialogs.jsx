import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItems from "./DialogItem/DialogItems";

const Dialogs = (props) => {
    let dialogsElement = props.state.dialogs.map(d => <DialogItems name={d.name} id={d.id}/>);
    let messagesElement = props.state.messages.map(m => <Message message={m.message}/>);

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
