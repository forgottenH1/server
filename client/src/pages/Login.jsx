// client/src/pages/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:5000/api/auth/login';

const Login = ({ setIsAuthenticated }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            // Send the login credentials to the backend
            const response = await axios.post(API_URL, { username, password });
            
            // Save the token upon success
            localStorage.setItem('authToken', response.data.token);
            
            // Update the app state and redirect to the dashboard
            setIsAuthenticated(true);
            navigate('/admin');

        } catch (err) {
            // Handle error (401 Invalid credentials from backend)
            setError('Invalid Username or Password');
        }
    };

    return (
        <div className="container admin-container">
            <h2 className="page-header">Admin Login</h2>
            <form onSubmit={handleSubmit} className="project-form" style={{ maxWidth: '400px', margin: '0 auto' }}>
                <input
                    type="text"
                    placeholder="Admin Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="submit-button">Log In</button>
                {error && <p className="status-message error">{error}</p>}
            </form>
        </div>
    );
};

export default Login;