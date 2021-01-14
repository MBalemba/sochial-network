import s from './Post.module.css';

const Post = (obj) => {
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


export default Post;