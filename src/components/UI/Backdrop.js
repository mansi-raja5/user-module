import ModalStyles from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <div className={ModalStyles.backdrop} onClick={props.onOkayClick}></div>
  );
};

export default Backdrop;
