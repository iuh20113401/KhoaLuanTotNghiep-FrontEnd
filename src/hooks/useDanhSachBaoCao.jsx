import { useQuery } from "@tanstack/react-query";
import { debounce } from "lodash"; // Add lodash for debouncing
import { useEffect, useState, useCallback } from "react";
import FilterBaoCao from "../components/GiangVien/QuanLyThucTap/DanhSachBaoCaoThucTap/filterBaoCao";

export const useDanhSachBaoCao = ({ key, fn }) => {
  const { data, isLoading } = useQuery({
    queryKey: [key],
    queryFn: fn,
  });
  const DanhSachBaoCao = data?.result.sort((a, b) => a.maDoAn - b.maDoAn);
  const [filterBaoCao, setFilterBaoCao] = useState(DanhSachBaoCao);

  const handleFilterBaoCao = useCallback(
    debounce((field, value) => {
      let filtered;
      if (field === "congTy") {
        filtered = DanhSachBaoCao.filter((baoCao) => {
          return baoCao.tenCongTy
            .toLowerCase()
            .replace(/ /g, "")
            .includes(value.toLowerCase().replace(/ /g, "").trim());
        });
      } else {
        filtered = DanhSachBaoCao.filter((baoCao) => {
          return baoCao.userInfo.hoTen
            .toLowerCase()
            .replace(/ /g, "")
            .includes(value.toLowerCase().replace(/ /g, "").trim());
        });
      }
      setFilterBaoCao(filtered);
    }, 300),
    [DanhSachBaoCao]
  );

  useEffect(() => {
    if (DanhSachBaoCao?.length > 0) setFilterBaoCao(DanhSachBaoCao);
  }, [DanhSachBaoCao]);

  return {
    DanhSachBaoCao,
    filterBaoCao,
    setFilterBaoCao,
    isLoading,
    handleFilterBaoCao,
  };
};
