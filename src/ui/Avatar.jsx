function Avatar({ src, size, ...props }) {
  return (
    <div
      className={`relative cursor-pointer ${size === "xl" ? "w-16 h-16" : ""} 
                  ${size === "lg" ? "w-14 h-14" : ""} 
                  ${size === "md" ? "w-12 h-12" : ""} 
                  ${size === "sm" ? "w-8 h-8" : ""} 
                  ${size === "xs" ? "w-6 h-6" : "w-10 h-10"}`}
      {...props}
    >
      <img
        src={src || "./public/hinhanh/iuh_logo_1.png"}
        alt="avatar"
        className="w-full h-full rounded-full"
        crossOrigin="anonymous | use-credentials"
      />
    </div>
  );
}

export default Avatar;
