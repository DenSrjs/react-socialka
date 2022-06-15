import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "hello", likeCounts: 45 },
            {id: 2, message: "hi",  likeCounts: 12},
        ],
        newPostText: 'it-kamasutra',
    },
    dialogsPage: {
        messages: [
            {id: 1, message: "hi"},
            {id: 2, message: "dfgdf"},
            {id: 3, message: "qwewe"},
        ],
        dialogs: [
            {id: 1, name: "Matvey"},
            {id: 2, name: "Egor"},
            {id: 3, name: "Daniil"},
        ],
    },
    sidebar: {},
}

export let addPost = ()=> {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText)=> {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;
