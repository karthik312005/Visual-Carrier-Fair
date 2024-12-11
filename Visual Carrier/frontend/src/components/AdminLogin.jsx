import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/users/adminlogin', credentials);
            if (response.data.success) {
                alert('Login successful!');
                navigate('/admin-dashboard');
            } else {
                alert(response.data.message || 'Invalid username or password');
            }
        } catch (error) {
            console.error(error);
            alert('Something went wrong. Please try again later.');
        }
    };

    const handleRegisterClick = () => {
        navigate('/adminregister');
    };

    const handleLogoClick = () => {
        navigate('/');
    };

    const styles = {
        navbar: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px',
            backgroundColor: 'fff#',
            color: '#000',
            position: 'sticky',
            top: 0,
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        },
        logo: {
            fontSize: '1.8rem',
            fontWeight: 'bold',
            cursor: 'pointer',
        },
        navLinks: {
            display: 'flex',
            gap: '15px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            color: '#fff',
        },
        authButtons: {
            display: 'flex',
            gap: '10px',
        },
        loginContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#343a40',
        },
        formContainer: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '400px',
            textAlign: 'center',
        },
    };

    return (
        <div>
            {/* Navbar */}
            <header style={styles.navbar}>
                <div style={styles.logo} onClick={handleLogoClick}>
                    Visual Career Fair
                </div>
                <div style={styles.authButtons}>
                    <a href="register" style={styles.navLink}>Sign Up</a>
                </div>
                <div style={styles.navLinks}>
                    <span
                        style={{
                            cursor: 'pointer',
                            textDecoration: 'underline',
                        }}
                        onClick={handleRegisterClick}
                    >
                        Register
                    </span>
                </div>
            </header>

            {/* Login Section */}
            <div style={styles.loginContainer}>
                <div style={styles.formContainer}>
                    <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>Admin Login</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={credentials.username}
                            onChange={handleChange}
                            required
                            style={{
                                display: 'block',
                                width: '95%',
                                padding: '10px',
                                margin: '10px 0',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                fontSize: '14px',
                            }}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={credentials.password}
                            onChange={handleChange}
                            required
                            style={{
                                display: 'block',
                                width: '95%',
                                padding: '10px',
                                margin: '10px 0',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                fontSize: '14px',
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                backgroundColor: '#28a745',
                                color: '#fff',
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '5px',
                                fontSize: '16px',
                                cursor: 'pointer',
                                marginTop: '10px',
                                width: '100%',
                            }}
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
