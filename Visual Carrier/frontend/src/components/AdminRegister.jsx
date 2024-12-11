import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AdminRegister = () => {
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
            const adminDetails = { ...formData, admin: true };
            await axios.post('http://localhost:8080/api/users/adminregister', adminDetails);
            alert('Admin registered successfully!');
            navigate('/adminlogin');
        } catch (error) {
            console.error(error);
            alert('Error registering admin.');
        }
    };

    return (
        <>
            <nav
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 20px',
                    backgroundColor: '#fff',
                    color: '#fff',
                    height: '5vh'
                }}
            >
<div style={{ fontSize: '25px', fontWeight: 'bold', color: '#000' }}>Virtual Career Fair</div>
<div>
                    <Link
                        to="/"
                        style={{
                            color: '#fff',
                            textDecoration: 'none',
                            marginRight: '15px',
                            fontWeight: 'bold',
                        }}
                    >
                        Home
                    </Link>
                    <Link
                        to="/adminlogin"
                        style={{
                            color: '#000',
                            background:'',
                            textDecoration: 'none',
                            marginRight: '15px',
                            fontWeight: 'bold',
                        }}
                    >
                        Login
                    </Link>
                    <Link
                        to="/about"
                        style={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                        }}
                    >
                        About
                    </Link>
                </div>
            </nav>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    backgroundColor: '#343a40',
                    margin: 0,
                    padding: 0,
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
                    <h2 style={{ color: '#000', fontSize: '24px', marginBottom: '20px' }}>Admin Register</h2>
                    <form onSubmit={handleSubmit}>
                        {['name', 'email', 'username', 'password', 'phoneNumber', 'address', 'age'].map((field) => (
                            <input
                                key={field}
                                name={field}
                                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                type={field === 'password' ? 'password' : field === 'age' ? 'number' : 'text'}
                                onChange={handleChange}
                                required
                                style={{
                                    padding: '10px',
                                    border: '1px solid #ccc',
                                    borderRadius: '5px',
                                    fontSize: '16px',
                                    marginBottom: '10px',
                                    width: '95%',
                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                    color: '#333',
                                }}
                            />
                        ))}
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
                                transition: 'background-color 0.3s',
                                width: '100%',
                            }}
                        >
                            Register
                        </button>
                    </form>
                    <p style={{ marginTop: '10px',color:'000' }}>
                        Already have an admin account?{' '}
                        <Link to="/adminlogin" style={{ color: '#000', textDecoration: 'none' }}>
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default AdminRegister;
