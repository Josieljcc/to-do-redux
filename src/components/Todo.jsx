import React, { Component } from "react";
import "./Todo.css";
import { connect } from "react-redux";
import {
  actionToggleTodo,
  actionDeleteToto,
  actionStartEdit,
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
      dispatch(actionToggleTodo(id, checked));
    });
  };

  handleDelete = () => {
    const {
      dispatch,
      todo: { id },
    } = this.props;
    dispatch(actionDeleteToto(id));
  };

  handleStartEdit = () => {
    const {
      dispatch,
      todo: { id },
    } = this.props;
    dispatch(actionStartEdit(id));
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
            🖋️
          </button>
          <button type="button" onClick={this.handleDelete}>
            🗑
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(Todo);
