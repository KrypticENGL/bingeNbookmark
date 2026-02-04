import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';
import './Dashboard.css';

const Dashboard = () => {
    const { user } = useAuth();

    return (
        <div className="dashboard">
            <Navbar />

            <main className="dashboard__content">
                <div className="container">
                    <div className="dashboard__header">
                        <h1>Dashboard</h1>
                        <p className="dashboard__subtitle">Welcome back, {user?.email}</p>
                    </div>

                    <div className="dashboard__grid">
                        <Card variant="glass" padding="large">
                            <h3>Your Reviews</h3>
                            <p className="card-text">No reviews yet. Start reviewing!</p>
                            <Button variant="primary">Create Review</Button>
                        </Card>

                        <Card variant="glass" padding="large">
                            <h3>Activity</h3>
                            <p className="card-text">Your recent activity will appear here</p>
                        </Card>

                        <Card variant="glass" padding="large">
                            <h3>Profile</h3>
                            <p className="card-text">Manage your account settings</p>
                            <Button variant="outline">Edit Profile</Button>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
