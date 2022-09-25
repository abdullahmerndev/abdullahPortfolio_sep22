import ScrollToTop from "react-scroll-to-top"; 
import { Link } from "react-router-dom";

const ContactSection = () => {
    return (
        <section className="contact-section">
            <h4 className="title">My Contact Info</h4>
            <div className="contact-content">
                <ul className="modes-of-contact">
                    <li>
                        <h4>email</h4>
                        <p>abdullahmerndev@gmail.com</p>
                    </li>
                    <li>
                        <h4>mobile</h4>
                        <p><a href="mobile">+91-912 160 5014</a></p>
                    </li>
                    <li>
                        <h4>web conferencing</h4>
                        <ul id="web-conferencing">
                            <li>Skype: abdullah@skype.com</li>
                            <li>Zoom: abdullahmerndev@gmail</li>
                            <li>Google Meet: abdullahmerndev@gmail</li>
                        </ul>
                    </li>
                    <li>
                        <h4>address</h4>
                        <p>Country: INDIA</p>
                    </li>
                </ul>
            </div> 
            <Link to="/contact" id="go-to-link">Contact details</Link>
            <ScrollToTop />
            {/* <div className="toTopBtn" onClick={scrollToTop}>&uarr;</div> */}
        </section>
    );
}

export default ContactSection;