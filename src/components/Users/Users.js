import React from 'react';
import styles from './usersStyle.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios'
import { userAPI } from '../../Api/Api';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = []
    for (let i = Math.max(props.currentPage - 3, 0); i <= Math.min(props.currentPage + 3, pagesCount); i++) {
        pages.push(i)
    }
    return <div>

        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selected : ""}
                    onClick={(e) => { props.onPageChanged(p) }}>{p} </span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userphoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.isFollowing.some(id => id === u.id)} 
                            onClick={() => { props.unfollow(u.id)
                                // props.toggleFollowingProgres(true, u.id)
                                // userAPI.unfollow(u.id)
                                //     .then(data => {
                                //         if (data.resultCode == 0) {
                                //             props.unfollow(u.id);
                                //             props.toggleFollowingProgres(false, u.id)
                                //         }
                                //     })

                            }}>unFollow</button>
                            : <button disabled={props.isFollowing.some(id => id === u.id)}
                             onClick={() => { props.follow(u.id)
                                // props.toggleFollowingProgres(true, u.id)
                                // userAPI.Follow(u.id)
                                //     .then(data => {
                                //         if (data.resultCode == 0) {
                                //             props.follow(u.id);
                                //             props.toggleFollowingProgres(false, u.id)
                                //         }
                                //     })
                            }}>follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
export default Users