import React, { useState } from "react";
import ToDo from "./components/ToDo";
import TodoForm from "./components/TodoForm";
import s from "./Sass/styles.module.css";
function App() {
  const [todo, setTodo] = useState([]);
  const addTask = (input) => {
    if (input) {
      const newItem = {
        id: Math.random().toString(36).substr(1, 10),
        task: input,
        isCompleted: false,
        date: new Date().toLocaleTimeString().substr(0, 5),
      };
      if (todo.some((item) => item.task === input)) {
        alert("You have this task");
      } else {
        setTodo([...todo, newItem]);
      }
    }
  };
  const removeTask = (ind) => {
    setTodo([...todo.filter((todo) => todo.id !== ind)]);
  };
  const taskComplete = (id) => {
    setTodo([
      ...todo.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      ),
    ]);
  };
  return (
    <div className="App">
      <header className={s.header}>
        <h1 className={s.title}>ToDo List {todo.length}</h1>
      </header>
      <div className={s.content}>
        <TodoForm addTask={addTask} />
        {todo.map((todo) => {
          return (
            <ToDo
              todo={todo}
              removeTask={removeTask}
              taskComplete={taskComplete}
              key={todo.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

{
  /* <input
          onSubmit={handleChange}
          type="text"
          className={s.input}
          onChange={handleChange}
        />
        <button onClick={addTodo} className={s.button}>
          Добавить
        </button> */
}
