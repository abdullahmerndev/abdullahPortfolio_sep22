import Navbar from "./Navbar";

const Projects = () => {
    return (
        <>
            <Navbar />
            <div className="projects">
                <h1 className="projects__title">Projects I've been working on.</h1>
                <ul className="projects__list">
                    <li className="projects__item">
                        <div className="projects__thumbnail"></div>
                        <h4 className="projects__name"><a href="https://ejam.com/">eJam</a></h4>
                        <p className="projects__desc">eJam is an online advertising &amp; marketing agency. Purpose of this web app is to perform the CRUD functionality. Users can view all entries of  the inventory and interact with the backend database to either retrieve details about an individual entry, update an entry, or delete an entry.</p>
                    </li>
                </ul>
                <strong>Projects currently under development</strong>
                <ul className="projects__list projects__list--uncomplete">
                    <li className="projects__item">
                        <div className="projects__thumbnail bugtracking"></div>
                        <h4 className="projects__name">bugtracking system</h4>
                        <p className="projects__desc">The bug tracking system is a PWA that monitors the source code and performs certain heuristics against it, such as SOLID principles, best coding practices, commonly occuring unit/functional testing failures, and a <em>beginner to intermediate</em> level OWASP vulnerabilities, in order to pin point and report the errors back to the owner. <br/>It's a beginner level bug reporting software and hence it has a few drawbacks. By no means it is production level software.</p>
                    </li>
                    <li className="projects__item">
                        <div className="projects__thumbnail acad-recs"></div>
                        <h4 className="projects__name">academic records</h4>
                        <p className="projects__desc">The Academic Records is a University / College management software. It manages data from all the departments in different collections correspondingly using MongoDB &amp; Atlas. Users can perform the CRUD operations and get the notifications about any new updates regarding upcoming events, curriculum changes if any, time table updates, class timings, lab timings, etc. via Push Notifications; and these notifications can be synced across mobile &amp; desktops using the <strong>Background Sync API.</strong></p>
                    </li>
                    <li className="projects__item">
                        <div className="projects__thumbnail quiz"></div>
                        <h4 className="projects__name">quiz tivia</h4>
                        <p className="projects__desc">Quiz Trivia is a web app using MERN that lets users select different categories and based on the category, the questionaire will be displayed correspondingly. A user can label the question in a specific category and can set a timer for others to input their response. The app has a Hall Of Fame page that lists out the users in an ascending order of their points accumulated.</p>
                    </li>
                    <li className="projects__item">
                        <div className="projects__thumbnail travelogue"></div>
                        <h4 className="projects__name">travelogue</h4>
                        <p className="projects__desc">Travelogue is a native app using React Native with navigation capability. I am trying to implement the real time data share using the <strong>WebRTC API</strong>.</p>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Projects;