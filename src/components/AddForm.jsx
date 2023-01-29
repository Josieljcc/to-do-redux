import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions/toDoActions";
import { FiEdit2 } from "react-icons/fi";
import "./AddForm.css";

class AddForm extends Component {
  state = {
    todoText: "",
  };

  handleInput = ({ target: { value } }) => {
    this.setState({ todoText: value });
  };

  createId = () => {
    const { todos } = this.props;
    if (todos.length) {
      return todos[todos.length - 1].id + 1;
    }
    return 0;
  };

  handleTodo = () => {
    const { todoText } = this.state;
    const { dispatch, isEditing } = this.props;
    if (!todoText) {
      window.alert("insira uma tarefa");
      return;
    }
    if (!isEditing) {
      const todo = {
        id: this.createId(),
        todoText,
        active: true,
      };
      dispatch(addTodo(todo));
      this.setState({ todoText: "" });
    }
  };

  render() {
    const { todoText } = this.state;
    const { isEditing } = this.props;
    return (
      <div className="add-form">
        <input
          type="text"
          name="todoText"
          placeholder="Nova Tarefa"
          value={todoText}
          onChange={this.handleInput}
        />
        {isEditing ? (
          <button type="button" onClick={this.handleTodo}>
            <FiEdit2 />
          </button>
        ) : (
          <button type="button" onClick={this.handleTodo}>
            +
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ todos, isEditing }) => ({
  todos,
  isEditing,
});

export default connect(mapStateToProps)(AddForm);
