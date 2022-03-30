import React, { createRef } from 'react';
import DialogItems from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Messages from './Message/Message';

const Dialogs = (props) => {
    let elemtext=React.createRef()
    let addtext=()=>{
    let text=elemtext.current.value
    alert(text)
   }

    let Dialogelements = props.state.dialogs.map(d => 
        <DialogItems name={d.name} id={d.id} />
    );
    let Messageselement = props.state.Message.map(m => 
        <Messages message={m.message} />
    )
    return (
        <div className={s.dialogs}>
            <div>
                {Dialogelements}
                <div>
                    <textarea ref={elemtext}>

                    </textarea>
                </div>
                <div>
                    <button onClick={addtext}>Click me</button>
                </div>
            </div>
            <div className={s.messages}>
                {Messageselement}
            </div>

        </div>)
}
export default Dialogs;