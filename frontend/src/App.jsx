import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import Home from './pages/Home';
import { Navbar } from './components/Navbar';
import './App.css';

function App() {
  const token = useSelector(state => state.auth.token);
  console.log('TOKEN:', token);

  return (
    <div className="App">
      <Router>
        <Navbar /> {/* Si necesitas la barra de navegación */}
        <Routes>
          <Route 
            path="/" 
            element={token ? <Navigate to="/home" /> : <Login />} 
          />
          <Route 
            path="/home" 
            element={token ? <Home /> : <Navigate to="/" />} 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
