import React, { Component } from "react";
import { connect } from "react-redux";
import { actionAddTodo, actionEdit } from "../redux/actions/toDoActions";
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

    if (todos.length === 0) {
      return 0;
    }
    const lastId = todos[todos.length - 1].id;
    return lastId + 1;
  };

  addTodo = () => {
    const { dispatch } = this.props;
    const { todoText } = this.state;
    const todo = {
      id: this.createId(),
      todoText,
      active: true,
    };
    dispatch(actionAddTodo(todo));
    this.setState({ todoText: "" });
  };

  editTodo = () => {
    const { dispatch, idToEdit, todos } = this.props;
    const { todoText } = this.state;
    const todo = {
      id: idToEdit,
      todoText,
      active: todos[idToEdit].active,
    };
    dispatch(actionEdit(todo));
    this.setState({ todoText: "" });
  };

  handleTodo = () => {
    const { todoText } = this.state;
    const { isEditing } = this.props;
    if (!todoText) {
      window.alert("insira uma tarefa");
      return;
    }
    if (!isEditing) {
      this.addTodo();
      return;
    }
    this.editTodo();
  };

  render() {
    const { todoText } = this.state;
    const { isEditing, todos, idToEdit } = this.props;
    return (
      <div className="add-form">
        <input
          type="text"
          name="todoText"
          placeholder={isEditing ? todos[idToEdit].todoText : "Nova Tarefa"}
          value={todoText}
          onChange={this.handleInput}
        />
        {isEditing ? (
          <button type="button" onClick={this.handleTodo}>
            🖋️
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

const mapStateToProps = ({ todos, isEditing, idToEdit }) => ({
  todos,
  isEditing,
  idToEdit,
});

export default connect(mapStateToProps)(AddForm);
