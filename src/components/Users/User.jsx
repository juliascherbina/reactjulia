import React from 'react';
import styles from './usersStyle.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';
let User = ({ user, isFollowing, unfollow, follow }) => { 
    return (<div>
        <span>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userphoto} />
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <button disabled={isFollowing.some(id => id === user.id)}
                        onClick={() => {
                            unfollow(user.id)
                        }}>unFollow</button>
                    : <button disabled={isFollowing.some(id => id === user.id)}
                        onClick={() => {
                            follow(user.id)

                        }}>follow</button>}
            </div>
        </span>
        <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{"u.location.city"}</div>
                <div>{"u.location.country"}</div>
            </span>
        </span>
    </div>)
}
export default User