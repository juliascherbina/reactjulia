import { act } from "react-dom/test-utils";
import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let State = {
    Posts: [
        { id: 1, message: 'Hi how are you?', likes: 12 },
        { id: 2, message: 'It\'s  my first post', likes: 20 },
        { id: 2, message: 'It\'s  my 6y8t68568 post', likes: 20 },
        { id: 2, message: 'It\'s  t8t895678 first post', likes: 20 }],
}

test('Lenght of posts should be incremented', () => {
    let action = addPostActionCreator('NewPost it')
    let newState = profileReducer(State, action)
    expect(newState.Posts.length).toBe(5);

});
test('message o newpost schould be New Post is', () => {
    let action = addPostActionCreator('NewPost it')

    let newState = profileReducer(State, action)

    expect(newState.Posts[4].message).toBe('NewPost it');
});
test('after deleting lenght of messages should be decrement', () => {
    let action = deletePost(1)

    let newState = profileReducer(State, action)

    expect(newState.Posts.length).toBe(3);
});

test('after deleting lenght of Posts shouldnt change if id  is incorrect', () => {
    let action = deletePost(1000)

    let newState = profileReducer(State, action)

    expect(newState.Posts.length).toBe(4);
});