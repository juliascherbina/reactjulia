import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div>
                <div>
                    <NavLink to='/dialogs/0' className={elem => elem.isActive ? s.active2 : s.item}>Julia</NavLink></div>
                <div> <NavLink to='/dialogs/1' className={elem => elem.isActive ? s.active2 : s.item}> Toxa</NavLink></div>
                <div > <NavLink to='/dialogs/2' className={elem => elem.isActive ? s.active2 : s.item}> Andrey</NavLink></div>
                <div > <NavLink to='/dialogs/3' className={elem => elem.isActive ? s.active2 : s.item}> Olga</NavLink></div>
                <div > <NavLink to='/dialogs/4' className={elem => elem.isActive ? s.active2 : s.item}>Svetlana</NavLink></div>
                <div> <NavLink to='/dialogs/5' className={elem => elem.isActive ? s.active2 : s.item}> Nastya</NavLink></div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi </div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>How is your sister?</div>
            </div>

        </div>)
}
export default Dialogs;