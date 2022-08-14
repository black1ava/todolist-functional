import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

function Header({ title, className }) {
  return (
    <div className={className}>
      <h1>{title}</h1>
    </div>
  );
}

Header.propTypes = propTypes;

export default Header;
