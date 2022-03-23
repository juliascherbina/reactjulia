import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    
    return <div className={s.item}> 
        <img className={s.img} src='https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'></img>
        <div> {props.message}<span>Like</span> {props.likes}
        </div>
    </div>
}
export default Post;