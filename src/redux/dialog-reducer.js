const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogReducer = (state, action) => {

    if (action.type === UPDATE_NEW_MESSAGE_BODY){
        state.newMessageBody = action.body;
    } else
    if (action.type === SEND_MESSAGE){
        debugger
        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.messegeContent.push({id: '4', message: body});
    }


    return state;
}

export default dialogReducer;

export const sendMessegeCreator = () => ({type: SEND_MESSAGE})

export const updateNewMassageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body,
    }
}