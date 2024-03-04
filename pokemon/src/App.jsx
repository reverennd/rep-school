import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import generateRandomPokemonImages from "./helpers/generateRandomPokemonImages";
import "./App.css";

import GameStack from "./components/GameStack";
import GameBoard from "./components/GameBoard";
import GameCompleteMessage from "./components/GameCompleteMessage";

const App = () => {
  const [boardImages, setBoardImages] = useState(undefined);
  const [stackImages, setStackImages] = useState(undefined);

  const removeFromStack = () => {
    setStackImages((prevStackImages) => prevStackImages.slice(1));
  };

  useEffect(() => {
    if (!boardImages) {
      generateRandomPokemonImages(10, (images) => {
        const nonEmptyImages = images.filter((image) => image);

        setBoardImages(nonEmptyImages);
        setStackImages([...nonEmptyImages].sort(() => Math.random() - 0.5));
      });
    }
  }, [boardImages]);

  if (!boardImages) {
    return (
      <div className="app-container">
        <h1 className="loading">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="app-container">
      <Header />
      <GameStack topImage={stackImages && stackImages[0]} />
      <GameBoard boardImages={boardImages} removeFromStack={removeFromStack} />
      <GameCompleteMessage display={stackImages.length === 0} />
    </div>
  );
};

export default App;
