import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, complete, text }) =>
  <li
    onClick={onClick}
    style={{
      textDecoration: complete ? "line-through" : "none"
    }}
  >
    {text}
  </li>;

Todo.PropTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
