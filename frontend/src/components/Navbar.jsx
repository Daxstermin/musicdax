import React from 'react';

// Exportación nombrada (sin "default")
export function Navbar() {
  return (
    <nav className="navbar">
      <h2>MusicDax</h2>
      {/* Aquí irían los links o botones */}
    </nav>
  );
}

// Si necesitas exportar más cosas desde el mismo archivo:
export const otherFunction = () => { /* ... */ };
