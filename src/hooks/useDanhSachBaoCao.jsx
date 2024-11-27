import { useQuery } from "@tanstack/react-query";
import { debounce } from "lodash"; // Add lodash for debouncing
import { useEffect, useState, useCallback } from "react";
import FilterBaoCao from "../components/GiangVien/QuanLyThucTap/DanhSachBaoCaoThucTap/FilterBaoCao";
import useCaiDatInfo from "./useCaiDatInfo";

export const useDanhSachBaoCao = ({ key, fn }) => {
  const { caiDatInfo, isLoading: caiDatLoading } = useCaiDatInfo();
  const [namHoc, setNamHoc] = useState("");
  const [hocKy, setHocKy] = useState("");
  useEffect(() => {
    if (!caiDatLoading) {
      setNamHoc(caiDatInfo?.namHoc);
      setHocKy(+caiDatInfo?.hocKy);
    }
  }, [caiDatInfo?.hocKy, caiDatInfo?.namHoc, caiDatLoading]);
  const { data, isLoading, refetch } = useQuery({
    queryKey: [key, hocKy, namHoc],
    queryFn: () => fn(hocKy, namHoc),
    enabled: !!caiDatLoading,
  });
  const DanhSachBaoCao = data?.results.sort((a, b) => a.maDoAn - b.maDoAn);
  const [filterBaoCao, setFilterBaoCao] = useState(DanhSachBaoCao);
  useEffect(() => {
    const isNamHocValid = /^\d{4}-\d{4}$/.test(namHoc);
    const isHocKyValid = [1, 2].includes(+hocKy);
    if (isNamHocValid && isHocKyValid) refetch();
  }, [namHoc, hocKy, refetch]);
  useEffect(() => {
    if (DanhSachBaoCao) setFilterBaoCao(DanhSachBaoCao);
  }, [DanhSachBaoCao]);
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
      } else if (field === "hocKy") {
        setHocKy(+value);
      } else if (field === "namHoc") {
        setNamHoc(value);
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

  return {
    DanhSachBaoCao,
    filterBaoCao,
    setFilterBaoCao,
    isLoading,
    namHoc,
    hocKy,
    refetch,
    handleFilterBaoCao,
  };
};
