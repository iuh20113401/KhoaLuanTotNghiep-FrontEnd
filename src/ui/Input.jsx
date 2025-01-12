import RadioSvg from "../../public/Radio.svg";
import CheckboxSvg from "../../public/Checkbox.svg";

function StyledInput({ className, width, hidden, error, ...props }) {
  const { register, ...otherProps } = props; // Extract register and other props

  const inputClasses = `
    block w-full 
    px-4 py-3 
    text-sm text-gray-700 
    bg-transparent 
    border border-gray-300 rounded-md 
    transition-all duration-150 ease-in-out 
    focus:border-primary focus:border-2 
    disabled:opacity-80 disabled:text-black
    md:text-xs md:px-3 md:py-2
  `;

  return (
    <input
      className={`${inputClasses} ${width ? `w-${width}` : ""} 
                 ${hidden ? "hidden" : ""} 
                 ${error ? "border-red-500" : ""} ${className}`}
      {...register}
      {...otherProps}
    />
  );
}

function StyledTextarea({ className, ...props }) {
  const { register, ...otherProps } = props; // Extract register and other props

  const textareaClasses = `
    block w-full 
    px-4 py-3 
    text-sm text-gray-700 
    bg-transparent 
    border border-gray-300 rounded-md 
    transition-all duration-150 ease-in-out 
    focus:border-primary focus:border-2 
    overflow-y-scroll 
    disabled:opacity-80 disabled:text-black
    md:text-xs md:px-3 md:py-2
  `;

  return (
    <textarea
      className={`${className}${textareaClasses}`}
      {...register}
      {...otherProps}
    />
  );
}

function StyledSelect({ children, ...props }) {
  const { register, ...otherProps } = props; // Extract register and other props

  const selectClasses = `
    block w-full 
    px-4 py-3 
    text-sm text-gray-700 
    bg-transparent 
    border border-gray-300 rounded-md 
    transition-all duration-150 ease-in-out 
    focus:border-primary focus:border-2 
    disabled:opacity-80 disabled:text-black
    md:text-xs md:px-3 md:py-2
  `;
  return (
    <select className={selectClasses} {...register} {...otherProps}>
      {children}
    </select>
  );
}

function CheckboxContainer({ label, register, ...props }) {
  return (
    <div className="flex items-center mb-2 text-sm md:text-xs">
      <input
        type="checkbox"
        className={`
          w-5 h-5 mt-1 
          bg-transparent 
          border-2 border-gray-400 rounded-[0.267em] 
          cursor-pointer 
          checked:bg-primary checked:border-primary 
          checked:shadow-[0_2px_6px_rgba(115,103,240,0.3)] 
          disabled:opacity-45
        `}
        {...props}
      />
      <label
        htmlFor={props.id}
        {...register}
        className="ml-2 cursor-pointer text-gray-700"
      >
        {label}
      </label>
    </div>
  );
}

function RadioContainer({ label, register, ...props }) {
  return (
    <div className="flex items-center mb-2 text-sm md:text-xs">
      <input
        type="radio"
        className={`
          w-5 h-5 mt-1
          bg-transparent 
          border-2 border-gray-400 rounded-full 
          cursor-pointer 
          checked:bg-primary checked:border-primary 
          checked:shadow-[0_2px_6px_rgba(115,103,240,0.3)] 
          disabled:opacity-45
        `}
        {...props}
        {...register}
      />
      <label htmlFor={props.id} className="ml-2 cursor-pointer text-gray-700">
        {label}
      </label>
    </div>
  );
}

export {
  StyledInput,
  StyledSelect,
  StyledTextarea,
  CheckboxContainer,
  RadioContainer,
};
