import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { taskAdded } from "../redux";
import { taskRemoved } from "../redux";

export default function TodoList() {
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInput("");
    dispatch(taskAdded(userInput));
  };
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");
  const todos = useSelector((state) => state);

  const removeTask = (id) => {
    dispatch(taskRemoved(id));
  };
  const isUserInputEmpty = userInput.trim().length === 0;
  return (
    <div className="todo-row">
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          className="todo-input"
          onChange={(e) => setUserInput(e.currentTarget.value)}
          placeholder="type what to do"
          value={userInput}
        ></input>
        <button className="todo-button edit" disabled={isUserInputEmpty}>
          add task
        </button>
      </form>
      <div className="task-list">
        {todos.map((item) => (
          <div className="todo-rows" key={item.id}>
            <div className="title">{item.title} </div>

            <button
              className="todo-button-delete"
              onClick={() => removeTask(item.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
