import "../styles/form.css";
function Form({ children, className, ...props }) {
  return (
    <form className={`block form ${className}`} {...props}>
      {children}
    </form>
  );
}

export default Form;
