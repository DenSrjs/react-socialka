import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItems from "./DialogItem/DialogItems";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map(d => <DialogItems name={d.name} id={d.id}/>);
    let messagesElement = state.messages.map(m => <Message message={m.message}/>);

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = ()=>{
        props.sendMessage();
    }
    let onNewMessageChange = (e)=>{
        let body = e.target.value;

        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.name__list}>
                {dialogsElement}
            </div>
            <div className={s.message}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'>
                        </textarea>
                    </div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
