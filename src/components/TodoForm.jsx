import { useRef, useState } from "react";
import s from "../Sass/styles.module.css";
function TodoForm({ addTask }) {
  const ref = useRef();
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(input);
    setInput("");
  };
  const handleChange = (e) => {
    setInput(e.currentTarget.value);
  };
  return (
    <form onSubmit={handleSubmit} className={s.formContainer}>
      <input
        className={s.formInput}
        value={input}
        type="text"
        onChange={handleChange}
        placeholder="Type something..."
      />
      <button className={s.addButton}>Добавить</button>
    </form>
  );
}

export default TodoForm;
