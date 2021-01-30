import BlockMessege from "./BlockMessege/BlockMessege";
import {sendMessegeCreator, updateNewMassageBodyCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import * as React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

//наша реализация контейнерной компоненты c прокидыванием пропсов через все древо без использования контекста
// const DialogsContainer = (props) => {
//
//     let dialogsname = props.dialogsPage.blockMessege.map((elem) => {
//         return (
//             <BlockMessege name={elem.name} id={elem.id} srck={elem.srck}/>
//         )
//     });
//
//     let messageContent = props.dialogsPage.messegeContent.map((elem) => {
//         return (
//             <div>{elem.message}</div>
//         )
//     })
//
//     let onSendMessageClick = () => {
//         props.dispatch(sendMessegeCreator())
//     }
//
//     let onNewMessageChange = (body) => {
//         props.dispatch(updateNewMassageBodyCreator(body));
//     }
//
//
//     return <Dialogs SendMessageClick={onSendMessageClick} NewMessageChange={onNewMessageChange}
//                     dialogsname={dialogsname} messageContent={messageContent}
//                     newMessageBody={props.dialogsPage.newMessageBody}
//     />
// }

//Реализация с помощью  RRdx
let mapStateToProps = (state) => {
    return {
        newMessageBody: state.dialogsPage.newMessageBody,
        dialogsname: state.dialogsPage.blockMessege.map((elem) => {
            return (
                <BlockMessege name={elem.name} id={elem.id} srck={elem.srck}/>
            )
        }),
        messageContent: state.dialogsPage.messegeContent.map((elem) => {
            return (
                <div>{elem.message}</div>
            )
        }),
    }
},mapDispatchToProps = (dispatch) => {
    return {
        SendMessageClick: () => { dispatch(sendMessegeCreator())},
        NewMessageChange: (body) => { dispatch(updateNewMassageBodyCreator(body));},
    }
}

// let AutRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

export default DialogsContainer;