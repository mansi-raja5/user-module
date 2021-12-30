import ModalStyles from "./Modal.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

const Modal = (props) => {
  return (
    <div>
      <div className={ModalStyles.backdrop} onClick={props.onOkayClick}>
        <Card className={ModalStyles.modal}>
          <header className={ModalStyles.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={ModalStyles.content}>
            <p>{props.msg}</p>
          </div>
          <footer className={ModalStyles.actions}>
            <Button onClick={props.onOkayClick}>Okay</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default Modal;
