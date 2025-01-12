function Button({
  children,
  icon,
  variation,
  size,
  state,
  bgcolor,
  color,
  rounded,
  className,
  type,
  ...props
}) {
  const buttonClasses = ` relative overflow-hidden cursor-pointer select-none  inline-flex items-center justify-center  transition-all duration-200 ease-in-out tap-highlight-color-transparent font-500     border border-transparent  rounded-md ${className} ${color ? color : "text-white"} `;

  const variationClasses = {
    default: `px-5 py-2 text-sm ${bgcolor ? `${bgcolor}` : "bg-primary-600"}`,
    outline: `px-5 py-2 text-sm ${bgcolor ? `border-${bgcolor} text-${bgcolor}` : "bg-primary-600"}`,
    text: "px-5 py-2 text-sm border-transparent",
    icon: `text-2xl ${bgcolor ? `${bgcolor}` : "bg-primary-600"} 
           w-9 h-9  flex items-center justify-center  px-2 py-1 `,
  };

  const sizeClasses = {
    block: "w-full",
    xl: "py-3 px-7 text-lg rounded-xl",
    lg: "py-3 px-6 text-base rounded-lg",
    sm: "text-xs",
    xs: "py-1 px-3 text-xs rounded-sm",
  };

  const stateClasses = {
    disabled: "cursor-not-allowed opacity-80 pointer-events-none",
  };

  return (
    <button
      type={type}
      className={` ${buttonClasses} 
                 ${variationClasses[variation]} 
                 ${sizeClasses[size]} 
                 ${stateClasses[state]} 
                 ${rounded ? "rounded-full" : ""}
                 ${color ? `text-secondary-900` : color}`}
      {...props}
    >
      {icon && (
        <span className="mr-2 inline-block font-tablerIcons">{icon}</span>
      )}
      {children}
    </button>
  );
}

Button.defaultProps = {
  variation: "default",
  size: "normal",
  state: "normal",
};

export default Button;
