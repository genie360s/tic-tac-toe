import React from 'react';

const VideoPlayer = () => {
  return (
    <div>
      <video controls>
        <source src="/videos/xo-game-animationr.mp4" type="video/mp4" />
        {/* Add more <source> elements for different video formats */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
