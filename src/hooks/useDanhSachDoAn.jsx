import { useQuery } from "@tanstack/react-query";
import { debounce } from "lodash"; // Add lodash for debouncing
import { useEffect, useState, useCallback } from "react";
import { layThongTinCaiDat } from "../services/CaiDat";

export const useDanhSachDoAn = ({ key, fn }) => {
  const { data: caiDat, isLoading: caiDatLoading } = useQuery({
    queryKey: ["thongTinCaiDat"],
    queryFn: layThongTinCaiDat,
  });
  const caiDatInfo = caiDat?.result;
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
  useEffect(() => {
    const isNamHocValid = /^\d{4}-\d{4}$/.test(namHoc);
    const isHocKyValid = [1, 2].includes(+hocKy);
    if (isNamHocValid && isHocKyValid) refetch();
  }, [namHoc, hocKy, refetch]);
  const DanhSachDoAn = data?.results.sort((a, b) => a.maDoAn - b.maDoAn);
  const [filterDoAn, setFilterDoAn] = useState(DanhSachDoAn);
  useEffect(() => {
    if (DanhSachDoAn) setFilterDoAn(DanhSachDoAn);
  }, [DanhSachDoAn]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleFilterDoAn = useCallback(
    debounce((field, value) => {
      let filtered = filterDoAn;
      if (field === "doAn") {
        filtered = filterDoAn.filter((da) => {
          return da.tenDoAn
            .toLowerCase()
            .replace(/ /g, "")
            .includes(value.toLowerCase().replace(/ /g, "").trim());
        });
      } else if (field === "sinhVien") {
        filtered = filterDoAn.filter((sinhVien) => {
          return sinhVien.sinhVien.some((sv) => {
            return sv?.hoTen
              .toLowerCase()
              .replace(/ /g, "")
              .includes(value.toLowerCase().replace(/ /g, "").trim());
          });
        });
      } else if (field === "hocKy") {
        setHocKy(+value);
      } else if (field === "namHoc") {
        setNamHoc(value);
      }
      setFilterDoAn(filtered);
    }, 300),
    [DanhSachDoAn]
  );

  useEffect(() => {
    if (DanhSachDoAn?.length > 0) setFilterDoAn(DanhSachDoAn);
  }, [DanhSachDoAn]);

  return {
    DanhSachDoAn,
    filterDoAn,
    setFilterDoAn,
    isLoading,
    hocKy,
    namHoc,
    handleFilterDoAn,
    refetch,
  };
};
