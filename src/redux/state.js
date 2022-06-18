let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "hello", likeCounts: 45 },
                {id: 2, message: "hi",  likeCounts: 12},
            ],
            newPostText: '',
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
    },
    getState(){
        return this._state
    },
    _callSubscriber (){
        console.log('state changed')
    },
    addPost (){
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe (observer){
        this._callSubscriber = observer
    },
}

export default store;
