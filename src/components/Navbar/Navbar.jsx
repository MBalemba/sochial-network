import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className = {s.nav}>
      <div>
        <NavLink to = "/Profile">Profile</NavLink>
      </div>
      <div>
        <NavLink to = "/Messages">Messages</NavLink>
      </div>
      <div>
        <NavLink to = "#">News</NavLink>
      </div>
      <div>
        <NavLink to = "#">Music</NavLink>
      </div>
    </nav>
  );
}


export default Navbar;