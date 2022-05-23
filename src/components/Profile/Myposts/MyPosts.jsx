import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import  { MaxLengthCreator, required } from '../../../utils/validators/validators';
import { TextArea } from '../../common/Preloader/FormsControls';
import s from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {
  console.log('RENDER')
  console.log(props)
  let Postelements = props.Posts.map(p => <Post message={p.message} likes={p.likes} />)
  //let Element = React.createRef();
  // let Addpost = () => {
  //   props.addPostActionCreator()
  // }
  // let Onchange = () => {
  //   let text = Element.current.value
  //   props.NewPostText(text)
  // }
  const AddNewPost=(values)=>{
   props.addPostActionCreator(values.NewPost)
   
  }
  return (
    <div className={s.postsBlock}>
      <h3> My posts</h3>
      <div>
        <MyPostsReduxForm onSubmit={AddNewPost} />
      </div>

      <div className={s.content}>
        {Postelements}
   

      </div>
    </div>

  )
};
const Maxlength=MaxLengthCreator(10)
export const MyPostsForm = (props) => {
  return (<form onSubmit={props.handleSubmit}>
    <Field component={TextArea} placeholder='enter your message' name={'NewPost'} validate={[ required,Maxlength]}/>
    {/* <textarea onChange={Onchange} ref={Element} value={props.textPost} /> */}
    <button >Add posts</button>

  </form>)
}
export const MyPostsReduxForm = reduxForm({ form: 'MyPostsForm' })(MyPostsForm)
export default MyPosts                    