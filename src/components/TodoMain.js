import { useDispatch, useSelector } from "react-redux";
import { changeDone, delTodo } from "../store/actions/todos";

const TodoMain = () => {
  const { todos } = useSelector((state) => state);

  const dispatch = useDispatch();
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.map((item) => (
          <li key={item.id}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={item.done}
                onChange={() => dispatch(changeDone(item.id))}
              />
              <label>{item.name}</label>
              <button
                className="destroy"
                onClick={() => dispatch(delTodo(item.id))}
              />
            </div>
            <input className="edit" defaultValue="Create a TodoMVC template" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoMain;
