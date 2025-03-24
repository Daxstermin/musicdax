import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import Home from './pages/Home';
import { Navbar } from './components/Navbar';
import './App.css';

const App = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <Routes>
      <Route 
        path="/home" 
        element={token ? <Home /> : <Navigate to="/login" replace />} 
      />
      <Route 
        path="/login" 
        element={!token ? <Login /> : <Navigate to="/home" replace />} 
      />
      <Route 
        path="*" 
        element={<Navigate to={token ? "/home" : "/login"} replace />} 
      />
    </Routes>
  );
}

export default App;
