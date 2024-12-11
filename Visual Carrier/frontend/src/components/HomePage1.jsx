import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const HomePage1 = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/users/login', credentials);
            if (response.data.success) {
                alert('Login successful!');
                navigate('/homepage2');
            } else {
                alert('Invalid username or password');
            }
        } catch (error) {
            console.error(error);
            alert('Login failed');
        }
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    const handleAdminLoginClick = () => {
        navigate('/adminlogin');
    };

    const handleLogoClick = () => {
        navigate('/');
    };

    const handleGetStarted = () => {
        navigate('/login');
    };

    const styles = {
        navbar: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px',
            backgroundColor: '#fff',
            color: '#000',
            position: 'sticky',
            top: 0,
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        },
        logo: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#000',
            cursor: 'pointer',
        },
        navCenter: {
            display: 'flex',
            justifyContent: 'center',
            flex: 1,
        },
        navLinks: {
            display: 'flex',
            gap: '15px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
        },
        navLink: {
            textDecoration: 'none',
            color: '#000',
            fontWeight: '500',
            padding: '5px 10px',
            transition: 'color 0.3s',
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
                    Virtual Career Fair
                </div>
                <div style={styles.navCenter}>
                    <ul style={styles.navLinks}>
                        <li><a href="#students" style={styles.navLink}>Students</a></li>
                        <li><a href="#employers" style={styles.navLink}>Employers</a></li>
                        <li><a href="#organization" style={styles.navLink}>Organization</a></li>
                        <li><a href="#college" style={styles.navLink}>College / University</a></li>
                        <li><a href="#about" style={styles.navLink}>About Us</a></li>
                    </ul>
                </div>
                <div style={styles.authButtons}>
                    <a href="/" style={styles.navLink}>Logout</a>
                </div>
            </header>

            {/* Login Section */}
            <div style={styles.loginContainer}>
                <div style={styles.formContainer}>
  
                    <main>
                        
                        <p>Welcome To User Home Page.</p>
                        
                    </main>
                </div>
            </div>
        </div>
    );
};

export default HomePage1;
