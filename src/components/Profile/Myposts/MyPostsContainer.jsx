import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, NewPostText } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


const mapStateToProps = (state) => {
  return {
    Posts: state.profilePage.Posts,
    textPost: state.profilePage.textPost
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    NewPostText: (text) => {
      let action = NewPostText(text)
      dispatch(action)
    },
    addPostActionCreator: () => {
      dispatch(addPostActionCreator())
    }
  }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer                    