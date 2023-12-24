import React, { useEffect, useRef, useState } from "react";
import {
  changeDone,
  delTodo,
  updateNameAction,
} from "../store/actions/todos.js";
import classnames from "classnames";
import { useDispatch } from "react-redux";

const TodoItem = ({ item }) => {
  const [currentId, setCurrentId] = useState("");
  const dispatch = useDispatch();
  const ref = useRef(null);

  // 输入框单独受控
  const [currentName, setCurrentName] = useState("");

  const showEdit = () => {
    setCurrentId(item.id);
    setCurrentName(item.name);
  };

  useEffect(() => {
    ref.current.focus();
  }, [currentId]);

  const onEdit = (e) => {
    if (e.keyCode === 27) {
      setCurrentId("");
    }
    if (e.keyCode === 13) {
      dispatch(
        updateNameAction({
          name: currentName,
          id: currentId,
        }),
      );
      setCurrentId("");
    }
  };

  return (
    <li
      key={item.id}
      className={classnames({
        completed: item.done,
        editing: item.id === currentId,
      })}
    >
      <div className="view">
        <input
          className="toggle"
          checked={item.done}
          type="checkbox"
          onChange={() => dispatch(changeDone(item.id))}
        />
        <label onDoubleClick={showEdit}>{item.name}</label>
        <button
          className="destroy"
          onClick={() => dispatch(delTodo(item.id))}
        ></button>
      </div>
      {/*编辑*/}
      <input
        onKeyUp={onEdit}
        onChange={(e) => setCurrentName(e.target.value)}
        value={currentName}
        onBlur={() => setCurrentId(null)}
        className="edit"
        ref={ref}
      />
    </li>
  );
};

export default TodoItem;
