function Modal({ children, size, ...props }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-[1090] flex items-center justify-center p-0 bg-black/30 overflow-y-auto outline-0 transition-opacity duration-150 `}
      {...props}
    >
      <div
        className={`max-w-[35rem] w-full mx-[1.5rem] ${
          size === "lg" ? "max-w-[60vw]" : ""
        } ${size === "xl" ? "max-w-[90vw]" : ""}`}
      >
        <div className="relative flex flex-col w-full p-[1.5rem] bg-white border-[0] border-gray-300 rounded-[0.5rem] shadow-[0_0.25rem_1.125rem_rgba(47,43,61,0.16)]">
          {children}
        </div>
      </div>
    </div>
  );
}

Modal.Header = function ModalHeader({ children, onClick }) {
  return (
    <div className="flex items-center px-[1.5rem] pt-[1.5rem] border-b-0 rounded-t-[0.5rem]">
      {children}
      <button
        className="ml-auto p-[0.25em] text-gray-700 bg-transparent border-0 opacity-50 hover:opacity-75 cursor-pointer transition-opacity duration-200 w-[1.125rem] h-[1.125rem]"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

Modal.Body = function ModalBody({ children }) {
  return (
    <div className="flex-1 p-[1.5rem] overflow-y-auto max-h-[90vh]">
      {children}
    </div>
  );
};

Modal.Footer = function ModalFooter({ children }) {
  return (
    <div className="flex justify-end p-[1rem] border-t-0 rounded-b-[0.5rem]">
      {children}
    </div>
  );
};

export default Modal;
