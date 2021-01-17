import s from './Dialogs.module.css'
import BlockMessege from "./BlockMessege/BlockMessege";
import Post from "../Profile/MyPosts/Post/Post";
import Search from "./search/search";
import {sendMessegeCreator, updateNewMassageBodyCreator} from "../../redux/dialog-reducer";

const Dialogs = (props) => {
    debugger
    let dialogsname = props.dialogsPage.blockMessege.map((elem) =>{
        return (
            <BlockMessege name = {elem.name} id= {elem.id} srck= {elem.srck} />
    )
    });

    let messegeContent = props.dialogsPage.messegeContent.map((elem) =>{
        return (
            <div>{elem.message}</div>
        )
    })

    let onSendMessageClick = () => {
        props.dispatch(sendMessegeCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMassageBodyCreator(body));
    }



    return(
        <div className={s.grid}>
            <div className={s.leftSide}>
                <Search />

                <div className={s.Meseges}>
                    {dialogsname}



                </div>
            </div>

            <div className={s.rightSide}>
                {messegeContent}
                <div>
                    <div><textarea
                        onChange={onNewMessageChange}
                        value={props.dialogsPage.newMessageBody}
                        placeholder="enter your message"></textarea></div>
                    <div><button onClick={onSendMessageClick}>send</button></div>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;