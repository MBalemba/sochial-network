import s from './Post.module.css';

const Post = (obj) => {
  return (
    <div class={s.Post}>
      <div class={s.Header}>
        <div class={s.left}>
          <img src={obj.srck} alt="ava" />
          <div class={s.info}>
            <a href="s#">{obj.name} </a>
            <span>сегодня в 15:00</span>
          </div>
        </div>


      </div>


    </div>

  );
}


export default Post;