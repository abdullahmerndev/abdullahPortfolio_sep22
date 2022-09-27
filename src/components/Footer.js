import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="personal-info">
                    <Link to="/" className="myname">abdullah</Link>
                    <p className="profession">full stack software developer/engineer</p>
                </div>
                <nav className="footer__nav">
                    <ul>
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/projects">projects</Link></li>
                        <li><Link to="/resume">resume</Link></li>
                        <li><Link to="/about">about</Link></li>
                        <li><Link to="/contact">contact</Link></li>
                    </ul>
                </nav>
                <nav className="interwebs">
                <h4>interwebs</h4>
                    <ul>
                        <li><a href="https://github.com/abdullahmerndev"><i className="fa-brands fa-github"></i></a></li>
                        <li><a href="https://twitter.com/abby_fsd"><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/abdullah-abdullah-75221b114/"><i className="fa-brands fa-linkedin"></i></a></li>
                    </ul>
                </nav>
                <div className="brief-contact">
                    <p>Email: <strong><a href="mailto:abdullahmerndev@gmail.com">abdullahmerndev@gmail.com</a></strong></p>
                    <p>Mobile: <strong><a href="tel:+91-912 160 5014">+91-912 160 5014</a></strong></p>
                    <p>Country: <strong>INDIA</strong></p>
                </div>
            </div>
            <hr />
            <p>&copy; 2022. Designed &amp; developed by <Link to="/about"><span>Abdullah</span></Link></p>
        </footer>
    );
}

export default Footer;