import s from './Dialogs.module.css'
import Search from "./search/search";
import {Redirect} from "react-router-dom"
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import React from "react";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {


    let onSendMessageClick = (body) => {
        props.SendMessageClick(body);
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
                    {/*<form onClick={(e)=>{e.preventDefault()}}>*/}
                    {/*    <div><textarea*/}
                    {/*        onChange={onNewMessageChange}*/}
                    {/*        value={props.newMessageBody}*/}
                    {/*        placeholder="enter your message"></textarea></div>*/}
                    {/*    <div>*/}
                    {/*        <button onClick={()=>{onSendMessageClick()}}>send</button>*/}
                    {/*    </div>*/}
                    {/*</form>*/}
                    <FormDialog onSubmit={(values)=>{ console.log(values); if(values.value) {onSendMessageClick(values.value)}}}/>

                </div>
            </div>

        </div>
    );
}
const maxLength = maxLengthCreator(50);
let FormDialog = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field
                validate={[required, maxLength]}
                component={Textarea}
                placeholder="enter your message"
                name = "value"
            /></div>
            <div>
                <button >send</button>
            </div>
        </form>
    )
}

FormDialog = reduxForm({
    form: 'formDialog'
})(FormDialog)

export default Dialogs;