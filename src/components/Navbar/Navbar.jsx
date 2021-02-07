import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {

    let click = (e) => {
        debugger
        console.log(e.target.tagName);
        if (e.target.tagName !== 'NAV') {
            e.currentTarget.childNodes.forEach((el) => {
                el.className = '';
            })
        }
        if (e.target.tagName === 'A') {
            e.target.parentNode.className = s.active;
        }
    };

    return (
        <nav onClick={click} className={s.nav}>
            <div className={s.active}>
                <NavLink to="/Profile">Profile</NavLink>
            </div>

            <div>
                <NavLink to="/Messages">Messages</NavLink>
            </div>

            <div>
                <NavLink to="#">News</NavLink>
            </div>

            <div>
                <NavLink to="/users">Users</NavLink>
            </div>


            <div>
                <NavLink to="#">Music</NavLink>
            </div>
        </nav>
    );

}


export default Navbar