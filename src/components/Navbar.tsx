import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

 const handleToggle = () => {
    const menu = document.getElementById("menu");
    let value: any = menu?.classList.value || 'open';
    setIsOpen(!isOpen);

    if (isOpen) {
      menu?.classList.remove(value);
      menu?.classList.add("open");
    } else {
      menu?.classList.remove(value);
      menu?.classList.add("close");
    }
 }

  return (
    <div className="container">
      <button id="hamburger-icon" onClick={handleToggle}> ☰ </button>
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
