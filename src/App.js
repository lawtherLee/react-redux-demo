import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";

import "./styles/base.css";
import "./styles/index.css";
import { useSelector } from "react-redux";

const App = () => {
  const state = useSelector((state) => state);
  return (
    <section className="todoapp">
      <TodoHeader />
      <TodoMain />
      <TodoFooter />
    </section>
  );
};

export default App;
