
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container">
        <ul>
            <li>
                <a href="/home">Home</a>
                <a href="/services">Services</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar