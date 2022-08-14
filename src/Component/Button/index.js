import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  onAction: PropTypes.func,
};

function Button({ name, className, onAction }) {
  return (
    <button onClick={onAction} className={className}>
      <p>{name}</p>
    </button>
  );
}

Button.propTypes = propTypes;

export default Button;
