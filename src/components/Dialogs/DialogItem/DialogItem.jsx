import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItems = (props) => {
    return <div>
        <img className={s.profilestyle} src='https://cdn2.vectorstock.com/i/1000x1000/02/71/profile-placeholder-default-avatar-girl-vector-23890271.jpg' />
        <div>
            <NavLink to={'/dialogs/' + props.id} className={elem => elem.isActive ? s.active2 : s.item}>
                {props.name}</NavLink>
        </div>
    </div>
};

export default DialogItems;