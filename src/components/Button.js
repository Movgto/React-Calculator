import '../stylesheets/Button.css';

function Button({ children, clickHandler, customClass, classValue}) {
    
    // Check if the value contained by the button is a number or an operator
    let btnType = /\d+/i.test(children) ? 'num' : 'optr';

    // If customClass is enabled assign a custom className
    if (customClass) {
        btnType = classValue;
    }

    return (
        <button onClick={ () => clickHandler(children)} className={btnType}>{children}</button>
    );
}

export default Button;