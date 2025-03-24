import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector, useDispatch } from 'react-redux';
import { togglePlay } from '../features/spotifySlice';

const Player = () => {
  const { currentTrack, isPlaying } = useSelector((state) => state.spotify);
  const dispatch = useDispatch();

  return (
    <div className="player-container">
      {currentTrack && (
        <ReactPlayer
          url={currentTrack.preview_url}
          playing={isPlaying}
          controls
          width="100%"
          height="50px"
        />
      )}
      <button onClick={() => dispatch(togglePlay())}>
        {isPlaying ? 'Pausar' : 'Reproducir'}
      </button>
    </div>
  );
};

export default Player;
