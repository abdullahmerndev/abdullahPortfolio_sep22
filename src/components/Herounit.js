const Herounit = () => {
    return (
        <>
        <section className="herounit" id="home">
            <main className="herounit__main">
                <div className="herounit__copy">
                <div className="inner-div1of2">
                    <p id="welcome-message">warm welcome!</p>
                    <p id="asking-permission">Allow me to embrace this opportunity &amp; introduce myself.</p>
                </div>
                <div className="inner-div2of2">
                    <h1>
                    It is with utmost pleasure &amp; a great delight that I am able to present myself &amp; showcase my personality, work, stuff that delights me, and the projects that I've been a part of, which constituted in laying the foundation towards me as a developer.</h1>
                </div>
                </div>
            </main>
            <aside className="herounit__aside">
                <h2 className="herounit__quote"><span id="ldquo">&ldquo;</span>find what you love &amp; let it kill you ..!!<span id="rdquo">&rdquo;</span><span id="quote-sayer">&#8212;charles bukowski</span></h2>
                <p className="herounit__aside--copy">It has been 7 years ever since I started tweaking with the web interfaces - <em>designing the layouts/wireframes</em>, transforming them into software via <em>code</em>, &amp; <em>deploying them to the cloud</em> for others to use.<br/> While on my journey, I've been constantly learning &amp; refining myself with additional skills and abilities which form my skill set.</p>
                <div id="skills-btns">
                    <button>hard skills</button>
                    <button>soft skills</button>
                </div>
            </aside>
        </section>
        </>
    );
}

export default Herounit;