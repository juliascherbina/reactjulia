import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let Element = React.createRef();
  let Addpost = () => {
    let text = Element.current.value
    props.addPost(text)
  }
  let Postelements = props.Posts.map(p => <Post message={p.message} likes={p.likes} />)
  return (
    <div className={s.postsBlock}>
      <h3> My posts</h3>
      <div>
        <div>
          <textarea ref={Element}></textarea>
        </div>
        <div>
          <button onClick={Addpost}>Add posts</button>
        </div>
      </div>

      <div className={s.content}>
        {Postelements}


      </div>
    </div>

  )
};
export default MyPosts                    