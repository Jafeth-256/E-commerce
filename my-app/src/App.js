// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './components/login';
import Dashboard from './components/dashboard'; 
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect root to /login */}
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} /> {/* Add route for Dashboard */}
                {/* Other routes... */}
            </Routes>
        </Router>
    );
}

export default App;