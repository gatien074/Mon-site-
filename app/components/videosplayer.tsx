import React from "react";

interface VideoPlayerProps {
  src: string;
  width?: number; // La largeur est optionnelle
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, width = 600 }) => {
  return (
    <div className="flex justify-center p-4 md:p-8">
      <div className="w-full max-w-full">
        <video
          controls
          className="w-full h-auto"
          style={{ maxWidth: `${width}px` }}
        >
          <source src={src} type="video/mp4" />
          Votre navigateur ne prend pas en charge la balise vidéo.
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;
