const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState= {
    posts: [
        { id: 1, avatar: "https://i.pinimg.com/originals/04/66/76/04667698c5da9db92c5e4ca748b99884.jpg", message: "Hi" },
        { id: 2, avatar: "https://avatars.mds.yandex.net/i?id=8fbd7f77f845ba7d5e1aeb9b1b96143c-5259265-images-thumbs&n=13", message: "How are you?" },
        { id: 3, avatar: "https://avatars.mds.yandex.net/i?id=0d7e423b8e33d7fff66ea08dacdd3737-5694385-images-thumbs&n=13", message: "Hihi" },
    ],
    newPostText: 'it-kamasutra',

}

const profileReducer = (state=initialState, action) => {
 
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 5,
                avatar: "https://avatars.mds.yandex.net/i?id=8fbd7f77f845ba7d5e1aeb9b1b96143c-5259265-images-thumbs&n=13",
                message: state.newPostText
            }
            let stateCopy={...state}
            stateCopy.posts=[...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy={...state}
            stateCopy.newPostText = action.message
            return stateCopy
        }
        default:
            return state
    }

}

export  const addPostActionCreator = () =>({ type: ADD_POST })
export const onPostChangeActionCreator = (message) => ({type:UPDATE_NEW_POST_TEXT,message:message})

export default profileReducer



