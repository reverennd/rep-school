import React from "react";
import Silhouette from "./Silhouette";

const GameBoard = ({ boardImages, removeFromStack }) => (
  <div className="game-board">
    {boardImages.map((image, index) => (
      <Silhouette
        key={index}
        imageUrl={image}
        removeTopImageFromStack={removeFromStack}
      />
    ))}
  </div>
);

export default GameBoard;
