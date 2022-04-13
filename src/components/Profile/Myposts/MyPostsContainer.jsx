import React from 'react';
import { addPostActionCreator, NewPostText } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

  let state = props.store.getState()
  let Addpost = () => {
    props.store.dispatch(addPostActionCreator())
  }
  let Onchange = (text) => {
    let action = NewPostText(text)
    props.store.dispatch(action)
  }
  return <MyPosts NewPostText={Onchange}
    addPostActionCreator={Addpost}
    Posts={state.profilePage.Posts}
    textPost={state.profilePage.textPost} />
};
export default MyPostsContainer                    