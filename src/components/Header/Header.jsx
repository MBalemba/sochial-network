import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Header = (props) => {



    return(
        <header className = {s.header}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdfpdxU6Qkxrczy4GJQY2vdDC12yzqaKU0g&usqp=CAU'/>

        <div className = {s.loginBlock}>
            {props.isAuth
                ?  props.login
                :  <NavLink to={'/login'}>Login</NavLink>
            }

        </div>

      </header>
    );
}


export default Header;