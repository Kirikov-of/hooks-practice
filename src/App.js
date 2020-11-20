import React from "react";

function App() {
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
    </div>
  );
}

export default App;
