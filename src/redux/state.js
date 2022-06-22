import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "hello", likeCounts: 45},
                {id: 2, message: "hi", likeCounts: 12},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Matvey"},
                {id: 2, name: "Egor"},
                {id: 3, name: "Daniil"},
            ],
            messages: [
                {id: 1, message: "hi"},
                {id: 2, message: "dfgdf"},
                {id: 3, message: "qwewe"},
            ],
            newMessageBody: '',

        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
