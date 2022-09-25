import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
                <div className="navbar__item moniker_abdullah">
                        <Link to="/"><h1>abdullah</h1></Link>
                </div>
                <ul className="navbar__list">
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
            </nav>
    );
}

export default Navbar;