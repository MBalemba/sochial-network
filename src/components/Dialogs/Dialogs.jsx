import s from './Dialogs.module.css'
import Search from "./search/search";
import {Redirect} from "react-router-dom"

const Dialogs = (props) => {


    let onSendMessageClick = () => {
        props.SendMessageClick();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        debugger
        props.NewMessageChange(body);
    }

    if(!props.isAuth){
        return <Redirect to = {"/login"} />
    }

    return (
        <div className={s.grid}>
            <div className={s.leftSide}>
                <Search/>

                <div className={s.Meseges}>
                    {props.dialogsname}


                </div>
            </div>

            <div className={s.rightSide}>
                {props.messageContent}
                <div>
                    <div><textarea
                        onChange={onNewMessageChange}
                        value={props.newMessageBody}
                        placeholder="enter your message"></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>send</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;