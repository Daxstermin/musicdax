import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTracks } from '../features/spotifySlice';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const searchTracks = async () => {
    try {
      const response = await axios.get('http://3.213.183.103:5000/api/spotify/search', {
        params: { q: query },
        headers: { Authorization: `Bearer ${token}` }
      });
      dispatch(setTracks(response.data));
    } catch (error) {
      console.error('Error buscando canciones:', error);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar canciones..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && searchTracks()}
      />
      <button onClick={searchTracks}>Buscar</button>
    </div>
  );
};

export default Search;
