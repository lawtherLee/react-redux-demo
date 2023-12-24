import { useDispatch, useSelector } from "react-redux";
import { changeCheckAllAction } from "../store/actions/todos";
import TodoItem from "./TodoItem";

const TodoMain = () => {
  const todos = useSelector((state) => {
    if (state.filters === "active") {
      return state.todos.filter((item) => !item.done);
    } else if (state.filters === "completed") {
      return state.todos.filter((item) => item.done);
    }
    return state.todos;
  });

  const isCheckAll = todos.every((item) => item.done);
  const dispatch = useDispatch();

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={isCheckAll}
        onChange={() => dispatch(changeCheckAllAction(isCheckAll))}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default TodoMain;
