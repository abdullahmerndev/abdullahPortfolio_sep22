import ScrollToTop from "react-scroll-to-top"; 
import { Link } from "react-router-dom";

const AboutSection = () => {
    return (
        <section className="about-section">
            <h4 className="title">About me</h4>
            <div>
                <p className="greet">Greetings!</p>
                <p className="about-copy">My name is Abdullah, and I am a software developer from south of India. I started my career as a developer in the year 2010, working as a junior C, C++ developer. Gradually, I started learning web development in 2014. Ever since, I built a few small scale mobile/web applications using AngularJS (the early versions of the framework), and eventually when I got to know about Reactjs, I fell in love with it. Since then, I've been using Reactjs alongside Nodejs and MongodDB.</p>
                <strong>disclaimer</strong>
                <p className="disclaimer">I used the quote above saying: <em>Find what you love, &amp; let it kill you</em> as a metaphor because, I have an insatiable desire &amp; curiosity to learn new things everyday and be the best version of myself as I can be. Even though it has been 7 years working as a <span>full stack developer</span>, by no means I feel any comfort or satisfaction in terms of fulfilment. Hence, I try &amp; persevere in my work everyday.<br/> I prefer learning &amp; growing above ego and its counterparts. I seek message in mess, character in chaos &amp; self-rectification in feedback of any type, particularly the negative one.<br/>Eventually, for me everything that I do boils down to this: <em>stay hungry, stay foolish!</em></p>
            </div>
            <Link to="/about" id="go-to-link">Find out more</Link>
            
            <ScrollToTop />
            {/* <div className="toTopBtn" onClick={scrollToTop}>&uarr;</div> */}
        </section>
    );
}

export default AboutSection;