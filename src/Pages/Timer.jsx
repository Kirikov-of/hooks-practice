import React from "react";
import { Link } from "react-router-dom";

function Timer() {
  const [timer, setTimer] = React.useState(0);
  let time = React.useRef();

  const goTimer = () => {
    time.current = setInterval(() => setTimer((prev) => prev + 1), 1000);
  };

  const clearTimer = () => {
    clearInterval(time.current);
  };

  const breakTimer = () => {
    clearTimer();
    setTimer(0);
  };

  const restartTimer = () => {
    breakTimer();
    goTimer();
  };

  return (
    <div className="App">
      <h1>Hello React</h1>
      <p>{timer}</p>
      <button onClick={goTimer}>go</button>
      <button onClick={clearTimer}>stop</button>
      <button onClick={restartTimer}>restart</button>
      <button onClick={breakTimer}>break</button>

      <Link to="/tasks">
        <button>Перейти на страницу с тасками</button>
      </Link>
    </div>
  );
}

export default Timer;
