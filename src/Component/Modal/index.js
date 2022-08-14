import React from "react";
import PropTypes from "prop-types";

import Header from "../Header";
import Button from "../Button";

const propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
  active: PropTypes.bool,
  onClose: PropTypes.func,
};

function Modal({ children, title, active, onClose }) {
  const modalMarkup = active && (
    <div className="modal">
      <div className="modal-content">
        <Header title={title} className="modal-title" />
        <Button name="x" className="close-modal" onAction={onClose} />
        {children}
      </div>
    </div>
  );

  return <>{modalMarkup}</>;
}

Modal.propTypes = propTypes;

export default Modal;
