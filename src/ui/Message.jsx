export const MessageWrapper = ({ children, you }) => (
  <div className={`flex mb-12 ${you ? "justify-end" : ""}`}>{children}</div>
);

export const MessageDiv = ({ children, you }) => (
  <div
    className={` shadow-[0_0.0625rem_0.375rem_0_rgba(47,43,61,0.1)] rounded-[0.375rem] border-t-l-0 p-[0.543rem_1rem] ${
      you
        ? "text-white bg-primary-400 !important border-t-l-[0.375rem] border-t-r-0"
        : "bg-white"
    }`}
  >
    {children}
  </div>
);
