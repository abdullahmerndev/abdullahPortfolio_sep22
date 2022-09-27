// import Home from "./Home";
// import { useState, useEffect } from "react";

const Splashscreen = (props) => {
    {/*const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, [props.delay]);
        return () => clearTimeout(timer)
    }, [props.delay]);*/}

    return (
        <div className="splash-screen">
            <div id="profile-pic"></div>
            <div className="intro">
                <p className="intro__greetings">cordial greetings!</p>
                <h1 className="intro__bio">My name is <span id="abdullah">abdullah</span>&nbsp;&amp;&nbsp;since last <span id="experience">7 years</span>, I've been working as a <span id="fsd">full stack software developer / engineer </span>building and deploying some of the interesting and awe-inspiring projects that helped me consolidate my skillset. <br />I was able to accumulate an abundant wealth of knowledge &amp; wisdom, and grasp hands-on experience while working on/with myriad types of projects and clients. <br />I possess a quenchless thirst to seek knowledge with continued passion and curiosity, that drives me to implement what I learn and enhance my skills.</h1>
                {/* <hr id="time-line" /> */}
            </div>
        </div>
    );
}

export default Splashscreen;