import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import Overlay from "./Overlay";

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onOkayClick={props.onOkayClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          msg={props.msg}
          onOkayClick={props.onOkayClick}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
