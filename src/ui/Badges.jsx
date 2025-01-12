function Badges({
  content,
  children,
  variation,
  pill,
  bgcolor,
  color,
  fontSize,
  ...props
}) {
  const badgeClasses = `
    inline-block font-medium 
    text-white // Default text color
    whitespace-nowrap text-center align-baseline
    rounded-md // Default border-radius
    px-3 py-1 // Default padding
  `;

  const variationClasses = {
    default: "text-xs",
    icon: `h-4 w-4 text-sm flex items-center justify-center 
           ${fontSize ? `text-${fontSize}` : ""}`,
  };

  return (
    <span
      className={`${badgeClasses} 
                 ${variationClasses[variation]} 
                 ${pill ? "rounded-full" : ""}
                 ${bgcolor ? `${bgcolor}` : "bg-primary-600"}
                 ${color ? color : ""}`}
      {...props}
    >
      {variation === "icon" && children ? (
        <span className="inline-block font-tablerIcons">{children}</span>
      ) : (
        content || children
      )}
    </span>
  );
}

Badges.defaultProps = {
  variation: "default",
};

export default Badges;
