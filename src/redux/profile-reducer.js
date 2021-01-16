const profileReducer = (state, action) => {

    if(action.type === 'ADD-POST'){
        let newPost = {
            name: "Макс Балемба",
            id: "0",
            srck: "https://sun1-92.userapi.com/impg/Aa9d2TJGoAIu89Q-RpSDKreTzPlDXkPaAZdL7A/LcFwPJVaTYA.jpg?size=100x0&quality=96&crop=558,189,953,953&sign=f4f26965a68cafa07dab7462ccfbb34e&ava=1",
            messege: state.newPostText,
        }
        state.posts.push(newPost);
        state.newPostText = '';
    } else
    if(action.type === 'UPDATE-NEW-TEXT'){
        state.newPostText = action.newText;

    }
    return state;
}


export default profileReducer;

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}

export const updatePostTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-TEXT',
        newText: text,
    }
}


