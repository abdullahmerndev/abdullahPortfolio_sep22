import ScrollToTop from "react-scroll-to-top"; 
import { Link } from "react-router-dom";

const ProjectsSection = () => {
    return (
        <section className="projects-section">
            <h4 className="title">Projects I've been working on</h4>
            <div className="mid-col">
                <h2>preview of the applications i built</h2>
                <article>
                    <strong className="app-name">make my day</strong>
                    <p className="app-description">Not just a traditional ToDo app or a task manager/reminder, instead it's a fully fledged productivity enhancing app. You can perform notekeeping of arbitrary, miniature ideas &amp; contemplate on them later. Users can prioritize the tasks of the day in different categories and the app will monitor or track the percentage of the tasks done.</p>
                </article>
                <article>
                    <strong className="app-name">quiz it out</strong>
                    <p className="app-description">t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                </article>
                <article>
                    <strong className="app-name">Bugtracking system</strong>
                    <p className="app-description">t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                </article>
                <article>
                    <strong className="app-name">Academic Records</strong>
                    <p className="app-description">t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                </article>
            </div>
            <Link to="/projects" id="go-to-link">Go to Projects</Link>
            <ScrollToTop />
            {/* <div className="toTopBtn" onClick={scrollToTop}>&uarr;</div> */}
        </section>
    );
}

export default ProjectsSection;