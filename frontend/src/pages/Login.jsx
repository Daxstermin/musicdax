import React from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';
import { FaSpotify } from 'react-icons/fa';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      dispatch(setToken(token));
      window.history.replaceState({}, document.title, '/');
      navigate('/home');
    }
  }, [dispatch, navigate]);

  return (
    <div className="login-container">
      <h1 className="app-title">MusicDax</h1>
      <a
        href="http://localhost:5000/auth/spotify"
        className="spotify-login-button"
      >
        <FaSpotify className="spotify-icon" />
        Iniciar sesión con Spotify
      </a>
    </div>
  );
};

export default Login;
