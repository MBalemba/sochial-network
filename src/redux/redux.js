import profileReducer from './profile-reducer'
import dialogReducer from './dialog-reducer'
let store = {
    _state: {

        profilePage: {
            posts: [
                {
                    name: "Макс Балемба",
                    id: "0",
                    srck: "https://sun1-92.userapi.com/impg/Aa9d2TJGoAIu89Q-RpSDKreTzPlDXkPaAZdL7A/LcFwPJVaTYA.jpg?size=100x0&quality=96&crop=558,189,953,953&sign=f4f26965a68cafa07dab7462ccfbb34e&ava=1",
                    messege: `sdsdsdsdsdsdsdsdsdsd
                sdsdsddddddddddddddddddd
                sdsdssssssssdsdsdsd`

                },
                {
                    name: "Владимир Никольский",
                    id: "1",
                    srck: "https://sun1-24.userapi.com/impg/SCePpqVJ_bHX7JrqMzgghJT3zj6XygsBLN8NOQ/WstJf3YaLJg.jpg?size=100x0&quality=96&crop=391,0,856,856&sign=5170b4f5f2e39eb32a29485962779c7f&ava=1",
                    messege: 'Hello'
                },
                {
                    name: "Денис Золотарев",
                    id: "2",
                    srck: "https://sun1-83.userapi.com/impg/W9sX2s5z-8-HwEXFfUIKTQWYy6u_EDhBH8g3rw/aW_Mgq_G_Ls.jpg?size=100x0&quality=96&crop=3,227,712,712&sign=b6b9ecdcaad12a005dec078b7c32ad6f&ava=1",
                    messege: 'Hello'
                },
                {
                    name: "Артур Амосов",
                    id: "3",
                    srck: "https://sun1-98.userapi.com/impg/c858436/v858436975/10a9b4/lPJp4Rbly2k.jpg?size=100x0&quality=96&crop=1,704,1120,1120&sign=fbbc356ede90a909b5e98b79b75efaad&ava=1",
                    messege: 'Hello'
                },
            ],

            newPostText: 'post write now...'
        },

        dialogPage: {
            blockMessege: [
                {
                    name: "Макс Балемба",
                    id: "0",
                    srck: "https://sun1-92.userapi.com/impg/Aa9d2TJGoAIu89Q-RpSDKreTzPlDXkPaAZdL7A/LcFwPJVaTYA.jpg?size=100x0&quality=96&crop=558,189,953,953&sign=f4f26965a68cafa07dab7462ccfbb34e&ava=1",

                },
                {
                    name: "Владимир Никольский",
                    id: "1",
                    srck: "https://sun1-24.userapi.com/impg/SCePpqVJ_bHX7JrqMzgghJT3zj6XygsBLN8NOQ/WstJf3YaLJg.jpg?size=100x0&quality=96&crop=391,0,856,856&sign=5170b4f5f2e39eb32a29485962779c7f&ava=1",
                },
                {
                    name: "Денис Золотарев",
                    id: "2",
                    srck: "https://sun1-83.userapi.com/impg/W9sX2s5z-8-HwEXFfUIKTQWYy6u_EDhBH8g3rw/aW_Mgq_G_Ls.jpg?size=100x0&quality=96&crop=3,227,712,712&sign=b6b9ecdcaad12a005dec078b7c32ad6f&ava=1",
                },
                {
                    name: "Артур Амосов",
                    id: "3",
                    srck: "https://sun1-98.userapi.com/impg/c858436/v858436975/10a9b4/lPJp4Rbly2k.jpg?size=100x0&quality=96&crop=1,704,1120,1120&sign=fbbc356ede90a909b5e98b79b75efaad&ava=1",
                }
            ],

            messegeContent: [
                {id: '0', message: 'hi'},
                {id: '1', message: 'How are you'},
                {id: '2', message: 'gg'},
                {id: '3', message: 'wp'}
            ],

            newMessageBody: ''

        },

    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    getState(){
      return this._state;
    },
    _callSubscriber() {
        console.log('state was changed')
    },


    addPost() {
        debugger;
        let newPost = {
            name: "Макс Балемба",
            id: "0",
            srck: "https://sun1-92.userapi.com/impg/Aa9d2TJGoAIu89Q-RpSDKreTzPlDXkPaAZdL7A/LcFwPJVaTYA.jpg?size=100x0&quality=96&crop=558,189,953,953&sign=f4f26965a68cafa07dab7462ccfbb34e&ava=1",
            messege: this._state.profilePage.newPostText,
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },

    updateNewText (newText){

        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },

    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
        this._callSubscriber();

    },
    //Переопределяет _callSubscriber,
    // присваивая значение функции, которая отрисует компоненты
}







export default store


