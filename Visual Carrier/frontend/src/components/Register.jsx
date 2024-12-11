import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <nav
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px',
                backgroundColor: '#fff',
                color: '#fff',
                height: '5vh',
            }}
        >
            <h1 style={{ fontSize: '24px', cursor: 'pointer' ,color: '#000'}} onClick={() => navigate('/')}>Virtual Career Fair</h1>
            <div>
                
                <button
                    style={{
                        backgroundColor: '#fff',
                        color: '#007bff',
                        padding: '8px 16px',
                        border: '1px solid #007bff',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                    onClick={() => navigate('/login')}
                >
                    Login
                </button>
            </div>
        </nav>
    );
};

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        phoneNumber: '',
        address: '',
        age: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/users/register', formData);
            if (response.data.success) {
                alert('Registration successful!');
                navigate('/login');
            } else {
                alert('Registration failed');
            }
        } catch (error) {
            console.error(error);
            alert('Registration failed');
        }
    };

    return (
        <>
            <NavBar />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    backgroundColor: '#343a40',
                }}
            >
                <div
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        padding: '30px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        width: '400px',
                        textAlign: 'center',
                    }}
                >
                    <button
                    style={{
                        backgroundColor: '#28a745',
                        color: '#fff',
                        padding: '8px 16px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginRight: '10px',
                    }}
                    onClick={() => navigate('/adminregister')}
                >
                    Admin Register
                </button>
                    <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>Create an Account</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
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
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
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
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
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
                            value={formData.password}
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
                            type="text"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={formData.phoneNumber}
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
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={formData.address}
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
                            type="number"
                            name="age"
                            placeholder="Age"
                            value={formData.age}
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
                            Register
                        </button>
                    </form>
                    <div style={{ marginTop: '20px' }}>
                        <p style={{ fontSize: '14px', color: '#333' }}>
                            Already have an account?{' '}
                            <span
                                style={{ color: '#000', cursor: 'pointer', textDecoration: 'underline' }}
                                onClick={() => navigate('/login')}
                            >
                                Login here
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
