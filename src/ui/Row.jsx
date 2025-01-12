import clsx from "clsx"; // You'll need clsx for conditional classes

const StyledRow = ({ className, gap, children, mobileRow, ...props }) => (
  <div
    className={clsx(
      "flex flex-wrap box-border", // Default styles
      className, // Allow external className
      { "gap-0": !gap, [`gap-${gap}`]: gap }, // Conditional gap
      { "mobile-row": mobileRow } // Conditional mobile-row class
    )}
    {...props}
  >
    {children}
  </div>
);

const ColLg = ({ children, className, ...props }) => (
  <div className={`flex-1 ${className}`}>{children}</div>
);
const Col10 = ({ children, className, ...props }) => (
  <div className={`w-10/12 ${className}`}>{children}</div>
);
const Col3 = ({ children, className, ...props }) => (
  <div className={`w-3/12 ${className}`}>{children}</div>
);
const Col9 = ({ children, className, ...props }) => (
  <div className={`w-9/12 ${className}`}>{children}</div>
);
const Col8 = ({ children, className, ...props }) => (
  <div className={`w-8/12 ${className}`}>{children}</div>
);
const Col4 = ({ children, className, ...props }) => (
  <div className={`w-4/12 ${className}`}>{children}</div>
);
const Col2 = ({ children, className, ...props }) => (
  <div className={`w-2/12 ${className}`}>{children}</div>
);
const Col1 = ({ children, className, ...props }) => (
  <div className={`w-1/12 ${className}`}>{children}</div>
);

export { StyledRow, ColLg, Col10, Col1, Col2, Col3, Col4, Col8, Col9 };
