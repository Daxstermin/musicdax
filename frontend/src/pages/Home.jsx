import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaMusic } from 'react-icons/fa';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user); // Si guardas más datos del usuario

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="home-container">
      {/* Barra superior */}
      <header className="app-header">
        <div className="logo">
          <FaMusic className="music-icon" />
          <h1>MusicDax</h1>
        </div>
        <button onClick={handleLogout} className="logout-button">
          <FaSignOutAlt /> Cerrar sesión
        </button>
      </header>

      {/* Contenido principal */}
      <main className="main-content">
        {user?.display_name && (
          <h2 className="welcome-message">
            Bienvenido, <span className="username">{user.display_name}</span>!
          </h2>
        )}

        <div className="player-section">
          {/* Aquí iría tu reproductor de música */}
          <div className="player-placeholder">
            <p>Reproductor de música integrado</p>
            {token && (
              <small className="token-info">
                Autenticado correctamente (token: {token.substring(0, 10)}...)
              </small>
            )}
          </div>
        </div>

        <div className="playlists-section">
          {/* Lista de playlists */}
          <h3>Tus playlists</h3>
          <div className="playlists-grid">
            {/* Mapear playlists aquí */}
            <div className="playlist-card">Playlist 1</div>
            <div className="playlist-card">Playlist 2</div>
          </div>
        </div>
      </main>

      {/* Estilos (también puedes usar CSS modules) */}
      <style jsx>{`
        .home-container {
          min-height: 100vh;
          background: linear-gradient(to bottom, #121212 0%, #1a1a1a 100%);
          color: white;
        }
        .app-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: #000000;
          border-bottom: 1px solid #282828;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .music-icon {
          font-size: 1.8rem;
          color: #1DB954;
        }
        .logout-button {
          background: none;
          border: 1px solid #535353;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .logout-button:hover {
          border-color: white;
        }
        .main-content {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .welcome-message {
          margin-bottom: 2rem;
        }
        .username {
          color: #1DB954;
        }
        .player-placeholder {
          background: #282828;
          padding: 2rem;
          border-radius: 8px;
          text-align: center;
          margin-bottom: 2rem;
        }
        .token-info {
          opacity: 0.7;
          display: block;
          margin-top: 1rem;
        }
        .playlists-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1rem;
        }
        .playlist-card {
          background: #282828;
          padding: 1rem;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .playlist-card:hover {
          background: #383838;
        }
      `}</style>
    </div>
  );
};

export default Home;
