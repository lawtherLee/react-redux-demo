import { useDispatch, useSelector } from "react-redux";
import { clearDoneAction } from "../store/actions/todos";
import { setFiltersAction } from "../store/actions/filters";

const TodoFooter = () => {
  const { todos } = useSelector((state) => state);
  const dispatch = useDispatch();
  const undone = todos.filter((item) => !item.done).length;

  const { filters } = useSelector((state) => state);

  const status = ["all", "active", "completed"];
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{undone}</strong> item left
      </span>
      <ul className="filters">
        {status.map((item) => (
          <li key={item} onClick={() => dispatch(setFiltersAction(item))}>
            <a className={item === filters ? "selected" : ""} href="#/">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="clear-completed"
        onClick={() => dispatch(clearDoneAction())}
      >
        Clear completed
      </button>
    </footer>
  );
};

export default TodoFooter;
