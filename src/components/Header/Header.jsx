import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
const Header = (props) => {
    return <header className={s.header}>
        <img src='https://www.logodesign.net/images/nature-logo.png' />
        <div className={s.loginBlock}>
            {props.isAuth ? props.login :
                <NavLink to={'/login/'} className={navData => navData.isActive ? s.active : s.item} >
                    Login
                    
                </NavLink>}
        </div>
    </header>
}
export default Header;