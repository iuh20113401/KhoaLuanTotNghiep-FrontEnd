import { useQuery } from "@tanstack/react-query";
import { useEffect, useState, useCallback, useMemo } from "react";
import { layThongTinCaiDat } from "../services/CaiDat";
import { debounce } from "lodash"; // Add lodash for debouncing

export const useDanhSachDoAn = ({ key, fn }) => {
  const { data: caiDat, isLoading: caiDatLoading } = useQuery({
    queryKey: ["thongTinCaiDat"],
    queryFn: layThongTinCaiDat,
  });

  const caiDatInfo = caiDat?.result;
  const [namHoc, setNamHoc] = useState("");
  const [hocKy, setHocKy] = useState("");

  // Consolidated effect for `namHoc` and `hocKy`
  useEffect(() => {
    if (!caiDatLoading && caiDatInfo) {
      setNamHoc(caiDatInfo.namHoc || "");
      setHocKy(Number(caiDatInfo.hocKy) || "");
    }
  }, [caiDatInfo, caiDatLoading]);

  const { data, isLoading, refetch } = useQuery({
    queryKey: [key, hocKy, namHoc],
    queryFn: () => fn(hocKy, namHoc),
    enabled:
      !caiDatLoading && /^\d{4}-\d{4}$/.test(namHoc) && [1, 2].includes(+hocKy),
  });
  const DanhSachDoAn = useMemo(
    () => data?.results?.sort((a, b) => a.maDoAn - b.maDoAn) || [],
    [data]
  );

  const [filterDoAn, setFilterDoAn] = useState(DanhSachDoAn);

  useEffect(() => {
    setFilterDoAn(DanhSachDoAn);
  }, [DanhSachDoAn]);

  const handleFilterDoAn = debounce((field, value) => {
    let filtered = DanhSachDoAn;

    if (field === "doAn") {
      filtered = DanhSachDoAn.filter((da) =>
        da.tenDoAn
          .toLowerCase()
          .replace(/ /g, "")
          .includes(value.toLowerCase().replace(/ /g, "").trim())
      );
    } else if (field === "sinhVien") {
      console.log(field, value);
      filtered = DanhSachDoAn.filter(
        (da) =>
          da.sinhVien1?.hoTen
            .toLowerCase()
            .replace(/ /g, "")
            .includes(value.toLowerCase().replace(/ /g, "").trim()) ||
          da?.sinhVien2?.hoTen
            ?.toLowerCase()
            .replace(/ /g, "")
            .includes(value.toLowerCase().replace(/ /g, "").trim())
      );
    } else if (field === "hocKy") {
      if (+value === 0) setHocKy(caiDatInfo.hocKy);
      if (value && [1, 2].includes(+value)) setHocKy(+value);
    } else if (field === "namHoc") {
      if (/^\d{4}-\d{4}$/.test(value)) setNamHoc(value);
    }

    setFilterDoAn(filtered);
  }, 300);

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
