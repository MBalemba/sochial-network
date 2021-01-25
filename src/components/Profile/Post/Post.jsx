import s from './Post.module.css';
import React from "react";

const ComponentPost = (obj) => {
  return (
    <div class={s.Post}>
      <div class={s.Header}>
        <div class={s.left}>
          <img src={obj.obj.srck} alt="ava" />
          <div class={s.info}>
            <a href="s#">{obj.obj.name} </a>
            <span>сегодня в 15:00</span>
          </div>
        </div>

      </div>


      <div className={s.Main}>
          {obj.obj.messege}
      </div>



    </div>

  );
}


const Post = (props) => {
    return props.posts.map((elem) =>  <ComponentPost obj = {elem} /> )
}


export default Post;