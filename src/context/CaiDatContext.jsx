import { useQuery } from "@tanstack/react-query";
import React, { createContext, useState, useEffect, useContext } from "react";
import { layThongTinCaiDat } from "../services/CaiDat";

const CaiDatContext = createContext();

export const CaiDatProvider = ({ children }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["thongTinCaiDat"],
    queryFn: layThongTinCaiDat,
  });
  const caiDatInfo = data?.result;

  return (
    <CaiDatContext.Provider value={{ caiDatInfo, isLoading }}>
      {children}
    </CaiDatContext.Provider>
  );
};

// Tạo custom hook để sử dụng context dễ dàng hơn
export const useCaiDat = () => {
  return useContext(CaiDatContext);
};
