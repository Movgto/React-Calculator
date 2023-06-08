import '../stylesheets/Button.css';

function Button({ children, clickHandler, isOperator }) {
    return (
        <button onClick={clickHandler} className={isOperator ? 'optr' : 'num'}>{children}</button>
    );
}

export default Button;