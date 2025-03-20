// backend/src/auth/spotify.js
const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const pool = require('../config/db');

// Cargar variables de entorno directamente (solución definitiva)
require('dotenv').config({ path: `${__dirname}/../../.env` });

// Configurar estrategia de Spotify
passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      callbackURL: process.env.SPOTIFY_CALLBACK_URL,
      passReqToCallback: true
    },
    async (req, accessToken, refreshToken, expires_in, profile, done) => {
      try {
        // Buscar/crear usuario en PostgreSQL
        const user = await pool.query(
          `INSERT INTO users (spotify_id, display_name, email, access_token, refresh_token)
           VALUES ($1, $2, $3, $4, $5)
           ON CONFLICT (spotify_id) 
           DO UPDATE SET 
             access_token = EXCLUDED.access_token,
             refresh_token = EXCLUDED.refresh_token
           RETURNING *`,
          [
            profile.id,
            profile.displayName,
            profile.emails?.[0]?.value || null,
            accessToken,
            refreshToken
          ]
        );
        
        return done(null, user.rows[0]);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Configuración de sesión
passport.serializeUser((user, done) => {
  done(null, {
    id: user.id,
    spotify_id: user.spotify_id,
    access_token: user.access_token // Guardar token para usar en frontend
  });
});

passport.deserializeUser(async (user, done) => {
  done(null, user); // Sesión ligera sin consultar BD
});

module.exports = passport;
