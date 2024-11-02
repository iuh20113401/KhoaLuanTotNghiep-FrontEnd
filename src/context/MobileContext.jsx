import React, { createContext, useState, useEffect, useContext } from "react";

const MobileContext = createContext();

export const MobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  console.log(isMobile, window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
  );
};

// Tạo custom hook để sử dụng context dễ dàng hơn
export const useMobile = () => {
  return useContext(MobileContext);
};
