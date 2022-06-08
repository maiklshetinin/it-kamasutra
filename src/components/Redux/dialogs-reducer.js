let initialState= {
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



const dialogsReducer = (state=initialState, action) => {
            return state
}

export default dialogsReducer