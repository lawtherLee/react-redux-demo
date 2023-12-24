import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "../store/actions/todos";

const TodoHeader = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state);
  const addTodo = (e) => {
    if (e.keyCode !== 13) return;
    if (!name) return alert("不能为空");
    dispatch(
      addTodoAction({
        id: Math.random(),
        name,
        done: false,
      }),
    );
    setName("");
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyUp={addTodo}
      />
    </header>
  );
};

export default TodoHeader;
