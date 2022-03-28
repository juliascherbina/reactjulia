import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let Posts = [
    { id: 1, message: 'Hi how are you?', likes: 12 },
    { id: 2, message: 'It\'s  my first post', likes: 20 },
    { id: 2, message: 'It\'s  my 6y8t68568 post', likes: 20 },
    { id: 2, message: 'It\'s  t8t895678 first post', likes: 20 },
  ]

  let Postelements = Posts.map(p => <Post message={p.message} likes={p.likes} />)
  return (
    <div className={s.postsBlock}>
      <h3> My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add posts</button>
        </div>
      </div>

      <div className={s.content}>
        {Postelements}


      </div>
    </div>

  )
};
export default MyPosts                    