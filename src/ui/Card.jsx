function Card({ className, children, ...props }) {
  return (
    <div
      className={`relative flex flex-col min-w-0 
                 bg-white border border-gray-200 rounded-md 
                 shadow-[0_0.1875rem_0.75rem_0_rgba(47,43,61,0.14)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

Card.Header = function CardHeader({ children, ...props }) {
  return (
    <div
      className="px-6 py-4 border-b border-gray-200 text-gray-700"
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
