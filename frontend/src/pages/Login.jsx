import React from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '../features/authSlice';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { FaSpotify } from 'react-icons/fa';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Para redireccionar

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      // 1. Guarda el token en Redux
      dispatch(setToken(token));
      
      // 2. Limpia la URL (opcional pero recomendado)
      window.history.replaceState({}, document.title, '/');
      
      // 3. Redirige al usuario a la página principal
      navigate('/home'); // Cambia '/home' por tu ruta deseada
    } else {
      console.log('No se encontró token en la URL'); // Debug
    }
  }, [dispatch, navigate]); // Agrega navigate como dependencia

  return (
    <div className="login-container">
      <h1 className="app-title">MusicDax</h1>
      <a
        href="http://3.213.183.103:5000/auth/spotify"
        className="spotify-login-button"
      >
        <FaSpotify className="spotify-icon" />
        Iniciar sesión con Spotify
      </a>
    </div>
  );
};

export default Login;
