import "../styles/tabHeader.css";
const StyledTabHeader = ({ children, bgColor = "bg-white" }) => {
  return (
    <ul
      className={`tabHeader flex w-full overflow-x-auto border-b border-gray-300 list-none ${bgColor}`}
    >
      {children}
    </ul>
  );
};

export { StyledTabHeader };
