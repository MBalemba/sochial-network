import s from './BlockMessege.module.css';
import {NavLink} from "react-router-dom";

const BlockMessege = (obj) => {
  return (
    <NavLink to={'/Messages/' + obj.id} class={s.Post}>
      <div class={s.Header}>
        <div class={s.left}>
          <a href="" class={s.link}> <img src={obj.srck} alt="ava" /></a>
          <div class={s.info}>
            <span>{obj.name} </span>
            <span>...</span>
          </div>
        </div>


      </div>


    </NavLink>

  );
}


export default BlockMessege;