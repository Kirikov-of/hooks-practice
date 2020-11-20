import React from "react";

function App() {
  const [timer, setTimer] = React.useState(0);
  let time = React.useRef();

  const goTime = () => {
    time.current = setInterval(() => setTimer((prev) => prev + 1), 1000);
  };

  const clearTime = () => {
    clearInterval(time.current);
  };

  const breakTimer = () => {
    clearTime();
    setTimer(0);
  };

  const restartTimer = () => {
    breakTimer();
    goTime();
  };

  return (
    <div className="App">
      <h1>Hello React</h1>
      <p>{timer}</p>
      <button onClick={goTime}>go</button>
      <button onClick={clearTime}>stop</button>
      <button onClick={restartTimer}>restart</button>
      <button onClick={breakTimer}>break</button>
    </div>
  );
}

export default App;
