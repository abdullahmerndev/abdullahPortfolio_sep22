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
                        <h4 className="projects__name">make my day</h4>
                        <p className="projects__desc">It's an amazing productivity app</p>
                    </li>
                    <li className="projects__item">
                        <div className="projects__thumbnail bugtracking"></div>
                        <h4 className="projects__name">bugtracking system</h4>
                        <p className="projects__desc">It's an amazing productivity app</p>
                    </li>
                    <li className="projects__item">
                        <div className="projects__thumbnail acad-recs"></div>
                        <h4 className="projects__name">academic records</h4>
                        <p className="projects__desc">It's an amazing productivity app</p>
                    </li>
                    <li className="projects__item">
                        <div className="projects__thumbnail quiz"></div>
                        <h4 className="projects__name">quiz tivia</h4>
                        <p className="projects__desc">It's an amazing productivity app</p>
                    </li>
                    <li className="projects__item">
                        <div className="projects__thumbnail travelogue"></div>
                        <h4 className="projects__name">travelogue</h4>
                        <p className="projects__desc">It's an amazing productivity app</p>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Projects;