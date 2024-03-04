import React, { useEffect, useMemo, useState } from "react";

const complete = new URL("../assets/complete.mp3", import.meta.url).href;

const GameCompleteMessage = ({ display }) => {
  const [opacity, setOpacity] = useState(0);
  const completeSound = useMemo(() => new Audio(complete), []);

  useEffect(() => {
    if (display) {
      setTimeout(() => {
        completeSound.play();
        setOpacity(1);
      }, 100);
    }
  }, [display]);

  const style = { opacity };

  if (!display) return null;

  return (
    <div style={style} className="game-complete-message">
      <h2 className="title">Congratulations!</h2>
      <p className="description">You have completed the game.</p>
    </div>
  );
};

export default GameCompleteMessage;
