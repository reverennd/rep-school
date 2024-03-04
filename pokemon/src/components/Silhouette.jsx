import React, { useMemo, useState } from "react";

const success = new URL("../assets/success.mp3", import.meta.url).href;
const wrong = new URL("../assets/wrong.mp3", import.meta.url).href;

const Silhouette = ({ imageUrl, removeTopImageFromStack }) => {
  const [isMatched, setIsMatched] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const successSound = useMemo(() => new Audio(success), []);
  const failureSound = useMemo(() => new Audio(wrong), []);

  const handleDragEnter = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();

    if (event.dataTransfer.getData("text/plain") === imageUrl) {
      successSound.play();
      setIsMatched(true);
      removeTopImageFromStack();
    } else {
      failureSound.play();
    }

    setIsDragOver(false);
  };

  const className = `
    pokemon-silhouette
    ${isDragOver ? "drag-over" : ""}
    ${isMatched ? "is-matched" : ""}
  `;

  return (
    <div
      className={className}
      style={{ backgroundImage: `url("${imageUrl}")` }}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    />
  );
};

export default Silhouette;
