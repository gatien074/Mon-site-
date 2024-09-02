import React from "react";

interface VideoPlayerProps {
  src: string;
  width: number; // La largeur est optionnelle
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, width = 600, }) => {
  return (
    <div className="container mx-auto px-16 py-16 flex justify-center ">
      <video controls width={width}>
        <source src={src} type="video/mp4" />
        Votre navigateur ne prend pas en charge la balise vidéo.
      </video>
    </div>
  );
};

export default VideoPlayer;
