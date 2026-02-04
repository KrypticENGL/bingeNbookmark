import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Card from '../components/Card';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Navbar />

            <main className="home__content">
                <section className="hero">
                    <div className="hero__container">
                        <h1 className="hero__title">Welcome to ReviewSite</h1>
                        <p className="hero__subtitle">
                            Share your experiences and discover authentic reviews from our community
                        </p>
                        <div className="hero__actions">
                            <Link to="/login">
                                <Button variant="primary" size="large">Get Started</Button>
                            </Link>
                            <Button variant="outline" size="large">Learn More</Button>
                        </div>
                    </div>
                </section>

                <section className="features">
                    <div className="container">
                        <h2 className="features__title">Why Choose Us?</h2>
                        <div className="features__grid">
                            <Card variant="glass" padding="large" hover>
                                <div className="feature">
                                    <div className="feature__icon">⭐</div>
                                    <h3 className="feature__title">Authentic Reviews</h3>
                                    <p className="feature__description">
                                        Read genuine reviews from verified users
                                    </p>
                                </div>
                            </Card>

                            <Card variant="glass" padding="large" hover>
                                <div className="feature">
                                    <div className="feature__icon">🔒</div>
                                    <h3 className="feature__title">Secure Platform</h3>
                                    <p className="feature__description">
                                        Your data is protected with Firebase authentication
                                    </p>
                                </div>
                            </Card>

                            <Card variant="glass" padding="large" hover>
                                <div className="feature">
                                    <div className="feature__icon">🚀</div>
                                    <h3 className="feature__title">Fast & Modern</h3>
                                    <p className="feature__description">
                                        Built with cutting-edge technologies for the best experience
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
