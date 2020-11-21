import React from "react";
import { Link } from "react-router-dom";

function Tasks() {
  const [tasks, setTasks] = React.useState(null);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div className="tasks">
      <Link to="/">
        <button className="back">Вернуться к таймеру</button>
      </Link>

      {tasks &&
        tasks.map((task) => (
          <div className="task" key={task.id}>
            <input type="checkbox" />
            <p>{task.title}</p>
          </div>
        ))}
    </div>
  );
}

export default Tasks;
