import "./styles.css";
import TodoInput from "./Components/Todo";
import TodoList from "./Components/TodoList";

export default function App() {
  return (
    <div className="App">
      <TodoInput />
      <br />
      <TodoList />
    </div>
  );
}
