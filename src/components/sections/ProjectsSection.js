import ScrollToTop from "react-scroll-to-top"; 
import { Link } from "react-router-dom";

const ProjectsSection = () => {
    return (
        <section className="projects-section">
            <h4 className="title">Projects I've been working on</h4>
            <div className="mid-col">
                <h2>preview of the applications i built</h2>
                <article>
                    <strong className="app-name"><a href="https://ejam.com/">eJam</a></strong>
                    <p className="app-description">eJam is an online advertising &amp; marketing agency. Purpose of this web app is to perform the CRUD functionality. Users can view all entries of  the inventory and interact with the backend database to either retrieve details about an individual entry, update an entry, or delete an entry.</p>
                </article>
                <strong id="wip">Projects under development (work in progress)</strong>
                <article>
                    <strong className="app-name">Bugtracking system</strong>
                    <p className="app-description">The bug tracking system is a PWA that monitors the source code and performs certain heuristics against it, such as SOLID principles, best coding practices, commonly occuring unit/functional testing failures, and a <em>beginner to intermediate</em> level OWASP vulnerabilities, in order to pin point and report the errors back to the owner. <br/>It's a beginner level bug reporting software and hence it has a few drawbacks. By no means it is production level software.</p>
                </article>
                <article>
                    <strong className="app-name">Academic Records</strong>
                    <p className="app-description">The Academic Records is a University / College management software. It manages data from all the departments in different collections correspondingly using MongoDB &amp; Atlas. Users can perform the CRUD operations and get the notifications about any new updates regarding upcoming events, curriculum changes if any, time table updates, class timings, lab timings, etc. via Push Notifications; and these notifications can be synced across mobile &amp; desktops using the <strong>Background Sync API.</strong></p>
                </article>
                <article>
                    <strong className="app-name">quiz trivia</strong>
                    <p className="app-description">Quiz Trivia is a web app using MERN that lets users select different categories and based on the category, the questionaire will be displayed correspondingly. A user can label the question in a specific category and can set a timer for others to input their response. The app has a Hall Of Fame page that lists out the users in an ascending order of their points accumulated.</p>
                </article>
                <article>
                    <strong className="app-name">travelogue</strong>
                    <p className="app-description">Travelogue is a native app using React Native with navigation capability. I am trying to implement the real time data share using the <strong>WebRTC API</strong>.</p>
                </article>
            </div>
            <Link to="/projects" id="go-to-link">Go to Projects</Link>
            <ScrollToTop />
            {/* <div className="toTopBtn" onClick={scrollToTop}>&uarr;</div> */}
        </section>
    );
}

export default ProjectsSection;