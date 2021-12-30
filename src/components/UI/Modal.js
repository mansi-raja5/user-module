import ModalStyles from "./Modal.module.css";
import Button from "../UI/Button";

const Modal = (props) => {
  const onClickModalHandler = (event) => {
    props.onOkayClick();
  };
  return (
    <div className={ModalStyles.backdrop}>
      <div className={ModalStyles.modal}>
        <div className={ModalStyles.header}>
          <h2>{props.title}</h2>
        </div>
        <div className={ModalStyles.content}>{props.msg}</div>
        <div className={ModalStyles.actions}>
          <Button onClick={onClickModalHandler}>Okay</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
