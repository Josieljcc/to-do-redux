import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import "./TodoList.css";

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div className="todo-list">
        {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = ({ todos }) => ({
  todos,
});

export default connect(mapStateToProps)(TodoList);
