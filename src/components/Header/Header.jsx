import s from './Header.module.css'
console.log(s);
const Header = () => {
    return(
        <header className = {s.header}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdfpdxU6Qkxrczy4GJQY2vdDC12yzqaKU0g&usqp=CAU'/>
      </header>
    );
}


export default Header;