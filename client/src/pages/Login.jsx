import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import './Login.css';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { login, signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            if (isLogin) {
                await login(email, password);
            } else {
                await signup(email, password);
            }
            navigate('/dashboard');
        } catch (err) {
            setError(err.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login">
            <div className="login__container">
                <Card variant="glass" padding="large" className="login__card">
                    <div className="login__header">
                        <Link to="/" className="login__logo">ReviewSite</Link>
                        <h2 className="login__title">
                            {isLogin ? 'Welcome Back' : 'Create Account'}
                        </h2>
                        <p className="login__subtitle">
                            {isLogin
                                ? 'Sign in to continue to your account'
                                : 'Sign up to get started'}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="login__form">
                        {error && <div className="login__error">{error}</div>}

                        <Input
                            type="email"
                            label="Email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <Input
                            type="password"
                            label="Password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            helperText={!isLogin ? "Password should be at least 6 characters" : ""}
                        />

                        <Button
                            type="submit"
                            variant="primary"
                            size="large"
                            loading={loading}
                            className="login__submit"
                        >
                            {isLogin ? 'Sign In' : 'Sign Up'}
                        </Button>
                    </form>

                    <div className="login__footer">
                        <p className="login__switch-text">
                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                            <button
                                type="button"
                                onClick={() => {
                                    setIsLogin(!isLogin);
                                    setError('');
                                }}
                                className="login__switch-button"
                            >
                                {isLogin ? 'Sign Up' : 'Sign In'}
                            </button>
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Login;
