import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, NewPostText } from '../../../redux/state';



const MyPosts = (props) => {
  let Postelements = props.Posts.map(p => <Post message={p.message} likes={p.likes} />)
  let Element = React.createRef();
  let Addpost = (text) => {
    props.dispatch(addPostActionCreator(text))
  }
  let Onchange = () => {
    let action = NewPostText()
    props.dispatch(action)
  }
  return (
    <div className={s.postsBlock}>
      <h3> My posts</h3>
      <div>
        <div>
          <textarea onChange={Onchange} ref={Element} value={props.textPost} />
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