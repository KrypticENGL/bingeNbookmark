import './Landing.css';

const Landing = () => {
    return (
        <div className="landing-page">
            <header className="header">
                <div className="header-container">
                    <div className="logo">BnB</div>
                    <nav className="nav">
                        <a href="#browse" className="nav-link">Browse</a>
                        <a href="#suggest" className="nav-link">Suggest</a>
                        <a href="#about" className="nav-link">About Me</a>
                    </nav>
                </div>
            </header>

            <main className="hero">
                <div className="hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Binge &<br />Bookmark
                        </h1>
                        <p className="hero-subtitle">- A review page for Critical Analysts</p>
                        <button className="cta-button">Get Started →</button>
                    </div>

                    <div className="hero-image">
                        <img src="/src/public/reel.png" alt="Film reel" className="floating-item reel" />
                        <img src="/src/public/clapperboard.png" alt="Clapperboard" className="floating-item clapperboard" />
                        <img src="/src/public/skull.png" alt="Reading skeleton" className="main-skull" />
                        <img src="/src/public/book.png" alt="Book" className="floating-item book" />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Landing;
