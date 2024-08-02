import React, { useState } from 'react';
import './App.css';
import Login from "./components/Login";
import {BrowserRouter, Navigate, Route, Routes, useNavigate} from "react-router-dom";
import Home from "./components/Home";

function App() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginSuccess = (token: string) => {
        console.log('APP Login successful, token:', token);
        localStorage.setItem('authToken', token);
        setIsLoggedIn(true);
        navigate(`/home`);
    };

    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={ <Login handleLoginSuccess={handleLoginSuccess} />} />
                <Route path="/home" element={ isLoggedIn ? <Home /> : <Navigate to="/login" /> } />
                <Route path="/" element={ isLoggedIn ? <Home /> : <Navigate to="/login" /> } />
                <Route path="*" element={ isLoggedIn ? <Home /> : <Navigate to="/login" /> } />
            </Routes>
        </div>
    );
}

export default App;
