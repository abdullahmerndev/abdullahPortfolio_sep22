import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNavToggle = () => {
        setNav(!nav);
    }

    return (
        <nav className="navbar">
                <div className="navbar__item moniker_abdullah">
                        <Link to="/"><h1>abdullah</h1></Link>
                </div>
                <ul className={nav ? "navbar__list--visible" : "navbar__list"}>
                    <li className="navbar__item">
                        <Link to="/">home</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/projects">projects</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/resume">resume</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/about">about</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/contact">contact</Link>
                    </li>
                </ul>
                <p className="mobile-menu" onClick={handleNavToggle}>
                {nav ? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-bars"></i>}
                </p>
            </nav>
    );
}

export default Navbar;