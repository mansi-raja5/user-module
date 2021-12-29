import buttonStyle from "./Button.module.css";

const Button = (props) => {
  return (
    <button type={props.buttonType || 'button'} className={buttonStyle.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
