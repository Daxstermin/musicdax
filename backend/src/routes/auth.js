const express = require('express');
const router = express.Router();
const passport = require('../auth/spotify');

// Autenticación con Spotify
router.get('/spotify', passport.authenticate('spotify', {
  scope: ['user-read-email', 'user-read-private', 'streaming'],
}));

// Callback de Spotify
router.get('/spotify/callback',
  passport.authenticate('spotify', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect(`http://3.213.183.103:3000/?token=${req.user.accessToken}`);
  }
);

module.exports = router;
