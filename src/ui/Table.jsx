import "../styles/table.css";

function StyledTable({
  children,
  variation = "default",
  hovered = false,
  className,
  ...props
}) {
  return (
    <div className="table-wrapper">
      <table
        className={`table-container ${variation} ${className} ${hovered ? "hoverable" : ""}`}
        {...props}
      >
        {children}
      </table>
    </div>
  );
}

export default StyledTable;
