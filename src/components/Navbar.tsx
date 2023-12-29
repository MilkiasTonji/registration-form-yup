import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({user}: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
 console.log("myuser: ", user)
 const handleToggle = () => {
    const menu = document.getElementById("menu");
    let value: any = menu?.classList.value || 'open';
    setIsOpen(!isOpen);

    if (isOpen) {
      menu?.classList.remove(value);
      menu?.classList.add("close");
    } else {
      menu?.classList.remove(value);
      menu?.classList.add("open");
    }
 }

  return (
    <div className="container">
      <div>
      <button id="hamburger-icon" onClick={handleToggle}> ☰ </button>
        {
          user && <div className="logo">{user.firstName.charAt(0)}</div>
        }
      </div>
      <ul id="menu">
        <li>
          <Link to={"/home"}>Home</Link>
          <Link to={"/services"}>Services</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
