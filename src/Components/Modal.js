import React from "react";

const Modal = (props) => {
  return (
    <div id={props.id} className="modal">
      <div className="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
      {props.children}
    </div>
  );
};

export default Modal;
