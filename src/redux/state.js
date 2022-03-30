

let state = {
    profilePage: {
        Posts: [
            { id: 1, message: 'Hi how are you?', likes: 12 },
            { id: 2, message: 'It\'s  my first post', likes: 20 },
            { id: 2, message: 'It\'s  my 6y8t68568 post', likes: 20 },
            { id: 2, message: 'It\'s  t8t895678 first post', likes: 20 }],

    },
    dialogsPage: {
        Message: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'How is your sister?' },
            { id: 4, message: 'How is your sister?' },
            { id: 5, message: 'How is your sister?' }],

        dialogs: [
            { id: 1, name: 'Julia' },
            { id: 2, name: 'Toxa' },
            { id: 3, name: 'Andrey' },
            { id: 4, name: 'Olga' },
            { id: 5, name: 'Svetlana' }],
    },
    sidebar: {
        myfriends: [
            { id: 1, name: 'Julia' },
            { id: 2, name: 'Svetlana' },
            { id: 3, name: 'Toxa' }],
    },
}


export let addPost = (newMessage) => {
    let newPost = {
        id: 5,
        message: newMessage,
        likes: 0
    };

    state.profilePage.Posts.push(newPost)
}



export default state;
