
import BlockMessege from "./BlockMessege/BlockMessege";
import Post from "../Profile/MyPosts/Post/Post";
import Search from "./search/search";
import {sendMessegeCreator, updateNewMassageBodyCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let dialogsname = props.dialogsPage.blockMessege.map((elem) =>{
        return (
            <BlockMessege name = {elem.name} id= {elem.id} srck= {elem.srck} />
    )
    });

    let messageContent = props.dialogsPage.messegeContent.map((elem) =>{
        return (
            <div>{elem.message}</div>
        )
    })

    let onSendMessageClick = () => {
        props.dispatch(sendMessegeCreator())
    }

    let onNewMessageChange = (body) => {
        props.dispatch(updateNewMassageBodyCreator(body));
    }



    return <Dialogs SendMessageClick = {onSendMessageClick} NewMessageChange = {onNewMessageChange}
    dialogsname = {dialogsname} messageContent = {messageContent}
    newMessageBody = {props.dialogsPage.newMessageBody}
    />
}

export default DialogsContainer;