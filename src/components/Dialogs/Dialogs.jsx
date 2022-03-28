import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItems = (props) => {
    return <div>
        <NavLink to={'/dialogs/' + props.id} className={elem => elem.isActive ? s.active2 : s.item}>
            {props.name}</NavLink>
    </div>
};
const Messages = (props) => {
    return <div className={s.message}>{props.message} </div>
}



const Dialogs = (props) => {
    let dialogs = [
        { id: 1, name: 'Julia' },
        { id: 2, name: 'Toxa' },
        { id: 3, name: 'Andrey' },
        { id: 4, name: 'Olga' },
        { id: 5, name: 'Svetlana' }]

    let Message = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'How is your sister?' },
        { id: 4, message: 'How is your sister?' },
        { id: 5, message: 'How is your sister?' }]

    let Dialogelements = dialogs.map(d => 
        <DialogItems name={d.name} id={d.id} />
    );
    let Messageselement = Message.map(m => 
        <Messages message={m.message} />
    )
    return (
        <div className={s.dialogs}>
            <div>
                {Dialogelements}
            </div>
            <div className={s.messages}>
                {Messageselement}
            </div>

        </div>)
}
export default Dialogs;