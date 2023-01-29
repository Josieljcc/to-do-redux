import "./App.css";
import AddForm from "./components/AddForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div className="back-panel">
        <h1>To-do-Redux</h1>
      </div>
      <AddForm />
      <TodoList />
    </div>
  );
}

export default App;
