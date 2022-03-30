import React from 'react';
import s from './Sidebar.module.css';
const Sidebar = (props) => {
    let friends = props.friends.map((p)=><li>{p.name}</li>)
    return <div >
        <ul>
           {friends}
        </ul>
        
    </div>
}
export default Sidebar;