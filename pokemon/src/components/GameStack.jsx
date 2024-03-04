import React, { useEffect, useState } from "react";

const GameStack = ({ topImage }) => {
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", event.target.src);
  };

  useEffect(() => {
    if (topImage) {
      const image = new Image();
      image.src = topImage;

      image.onload = () => {
        setIsLoadingImage(false);
      };
    }
  }, [topImage]);

  if (isLoadingImage) {
    return (
      <div className="game-stack">
        <h1 className="loading">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="game-stack">
      {topImage && (
        <img
          className="top-image"
          src={topImage}
          alt="Pokemon Silhouette"
          draggable
          onDragStart={handleDragStart}
        />
      )}
    </div>
  );
};

export default GameStack;
