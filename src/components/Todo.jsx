import React, { Component } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import "./Todo.css";
import { connect } from "react-redux";
import {
  deleteToto,
  startEdit,
  toggleTodo,
} from "../redux/actions/toDoActions";

class Todo extends Component {
  state = {
    checked: false,
  };

  handleActive = () => {
    const { checked } = this.state;
    const {
      dispatch,
      todo: { id },
    } = this.props;
    this.setState({ checked: !checked }, () => {
      dispatch(toggleTodo(id, checked));
    });
  };

  handleDelete = () => {
    const {
      dispatch,
      todo: { id },
    } = this.props;
    dispatch(deleteToto(id));
  };

  handleStartEdit = () => {
    const { dispatch } = this.props;
    dispatch(startEdit());
  };

  render() {
    const {
      todo: { todoText },
    } = this.props;
    const { checked } = this.state;
    return (
      <div className="todo">
        <input
          type="checkbox"
          checked={checked}
          name="active"
          onChange={this.handleActive}
        />
        <p className={checked ? "checked" : ""}>{todoText}</p>
        <div className="buttons">
          <button type="button" onClick={this.handleStartEdit}>
            <FiEdit2 />
          </button>
          <button type="button" onClick={this.handleDelete}>
            <FiTrash2 />
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(Todo);
