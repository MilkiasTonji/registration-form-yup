import { useState } from "react";
import "./navbar.css";

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
          <a href={"/home"}>Home</a>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
