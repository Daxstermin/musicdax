const { Pool } = require('pg');

const pool = new Pool({
  user: 'dax',
  password: 'insbc25966', // Contraseña como string
  host: 'localhost',
  port: 5432,
  database: 'musicdax',
});

// Verificar conexión
pool.query('SELECT NOW()', (err) => {
  if (err) console.error('Error conectando a PostgreSQL:', err);
  else console.log('Conexión exitosa a PostgreSQL');
});

module.exports = pool;
