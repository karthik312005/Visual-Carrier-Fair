import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import HomePage1 from './components/HomePage1';
import Register from './components/Register';
import Login from './components/Login';
import AdminRegister from './components/AdminRegister';
import AdminLogin from './components/AdminLogin';
import AdminHome from './components/AdminHome';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/homepage1" element={<HomePage1 />} />
                <Route path="/register" element={<Register />} />     
                <Route path="/login" element={<Login />} />   
                <Route path="/adminregister" element={<AdminRegister />} />     
                <Route path="/adminlogin" element={<AdminLogin />} />
                <Route path="/admin-dashboard" element={<AdminHome />} />
            </Routes>
        </Router>
    );
};

export default App;