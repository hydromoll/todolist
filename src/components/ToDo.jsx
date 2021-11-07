import { useRef, useState } from "react";
import s from "../Sass/styles.module.css";
import { AiFillDelete, AiFillCheckSquare, AiFillEdit } from "react-icons/ai";
function ToDo({ todo, removeTask, taskComplete }) {
  const [state, setstate] = useState(todo.task);
  const ref = useRef(null);
  const handleFocus = () => {
    ref.current.focus();
  };
  return (
    <>
      <div
        key={todo.id}
        className={todo.isCompleted ? s.todoBg : s.bgCompleted}
      >
        <div className={s.mainContent}>
          <input
            ref={ref}
            value={state}
            className={s.todoInput}
            onChange={(e) => setstate(e.target.value)}
          />
          <div className={"buttons"}>
            <button onClick={() => removeTask(todo.id)}>
              {" "}
              <AiFillDelete />
            </button>
            <button onClick={() => handleFocus()}>
              <AiFillEdit />
            </button>
            <button onClick={() => taskComplete(todo.id)}>
              <AiFillCheckSquare />
            </button>
          </div>
        </div>

        <h3 className={s.date}>{todo.date}</h3>
        <h3 className={s.date}>{todo.isCompleted ? "Выполнено" : ""}</h3>
      </div>
    </>
  );
}

export default ToDo;
