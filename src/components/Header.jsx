import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchColor } from "../redux/actions/toDoActions";
import "./Header.css";

class Header extends Component {
  changeColor = () => {
    const { dispatch } = this.props;
    dispatch(fetchColor());
  };
  render() {
    const { color } = this.props;
    return (
      <div className="back-panel" style={{ background: color }}>
        <h1>To-do-Redux</h1>
        <button type="button" onClick={this.changeColor}>
          Mudar a cor
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ color }) => ({
  color,
});

export default connect(mapStateToProps)(Header);
