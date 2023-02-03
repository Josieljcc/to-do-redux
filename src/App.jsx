import "./App.css";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <Header />
      <AddForm />
      <TodoList />
    </div>
  );
}

export default App;
