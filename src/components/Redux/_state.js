import profileReducer from "./profile-reducer"




let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, avatar: "https://i.pinimg.com/originals/04/66/76/04667698c5da9db92c5e4ca748b99884.jpg", message: "Hi" },
                { id: 2, avatar: "https://avatars.mds.yandex.net/i?id=8fbd7f77f845ba7d5e1aeb9b1b96143c-5259265-images-thumbs&n=13", message: "How are you?" },
                { id: 3, avatar: "https://avatars.mds.yandex.net/i?id=0d7e423b8e33d7fff66ea08dacdd3737-5694385-images-thumbs&n=13", message: "Hihi" },
            ],
            newPostText: 'it-kamasutra',

        },
        messagesPage: {
            DialogsData: [
                { id: 1, name: 'Dimak' },
                { id: 2, name: 'Valera' },
                { id: 3, name: 'Victor' },
                { id: 4, name: 'Sasha' }
            ],
            MessagesData: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Hiii' },
                { id: 3, message: 'How are you?' },
                { id: 4, message: 'HiHi' }
            ]
        }
    },
    getState(){return this._state},

    subscribe(observer) {
        this._callSubscriber = observer
    },


    _callSubscriber() {
        console.log('state was change')
    },

  

    dispatch(action) {

        this._state.profilePage= profileReducer(this._state.profilePage,action)
        this._callSubscriber()
    } 
}




window.store=store
export default store;