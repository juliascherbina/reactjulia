import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <div>
        New Post
      </div>
      <div className={s.content}>
        <Post message='Hi how are you?' />
        <Post likes='15'/>
        <Post message='It is my first post' />
        <Post likes='20'/>

      </div>
    </div>

  )
};
export default MyPosts                    