import { useQuery } from "@tanstack/react-query";
import { useEffect, useState, useMemo } from "react";
import { layThongTinCaiDat } from "../services/CaiDat";
import { debounce } from "lodash";

export const useDanhSachDeTai = ({ key, fn }) => {
  const { data: caiDat, isLoading: caiDatLoading } = useQuery({
    queryKey: ["thongTinCaiDat"],
    queryFn: layThongTinCaiDat,
  });

  const caiDatInfo = caiDat?.result;
  const [namHoc, setNamHoc] = useState("");
  const [hocKy, setHocKy] = useState("");

  useEffect(() => {
    if (!caiDatLoading && caiDatInfo) {
      setNamHoc(caiDatInfo.namHoc || "");
      setHocKy(Number(caiDatInfo.hocKy) || "");
    }
  }, [caiDatInfo, caiDatLoading]);

  const { data, isLoading, refetch } = useQuery({
    queryKey: [key, hocKy, namHoc],
    queryFn: () => fn(hocKy, namHoc),
    enabled: !caiDatLoading,
  });

  const DanhSachDeTai = useMemo(
    () => (data?.DanhSachDeTai || []).sort((a, b) => a.maDeTai - b.maDeTai),
    [data]
  );

  // State to hold filter values
  const [filterValues, setFilterValues] = useState({
    tenDeTai: "",
    giangVien: "",
    trangThai: null,
    soLuong: null,
    danhMuc: "",
  });

  const [filterDeTai, setFilterDeTai] = useState(DanhSachDeTai);

  useEffect(() => {
    setFilterDeTai(DanhSachDeTai);
  }, [DanhSachDeTai]);

  const handleFilterDeTai = debounce((field, value) => {
    setFilterValues((prev) => ({ ...prev, [field]: value }));
  }, 300);

  useEffect(() => {
    let filtered = DanhSachDeTai;

    if (filterValues.tenDeTai) {
      filtered = filtered.filter((dt) =>
        dt.tenDeTai
          .toLowerCase()
          .replace(/ /g, "")
          .includes(
            filterValues.tenDeTai.toLowerCase().replace(/ /g, "").trim()
          )
      );
    }

    if (filterValues.giangVien) {
      filtered = filtered.filter((dt) =>
        dt.giangVien.hoTen
          .toLowerCase()
          .replace(/ /g, "")
          .includes(
            filterValues.giangVien.toLowerCase().replace(/ /g, "").trim()
          )
      );
    }

    if (filterValues.trangThai !== null) {
      filtered = filtered.filter(
        (dt) => dt.trangThai === +filterValues.trangThai
      );
    }

    if (filterValues.soLuong !== null) {
      filtered = filtered.filter(
        (dt) => dt.soLuongDoAn === +filterValues.soLuong
      );
    }

    if (filterValues.danhMuc) {
      filtered =
        filterValues.danhMuc === ""
          ? filtered
          : (filtered = filtered.filter((dt) =>
              dt.danhMuc
                .toLowerCase()
                .replace(/ /g, "")
                .includes(
                  filterValues.danhMuc.toLowerCase().replace(/ /g, "").trim()
                )
            ));
    }

    setFilterDeTai(filtered);
  }, [filterValues, DanhSachDeTai]);

  return {
    DanhSachDeTai,
    filterDeTai,
    setFilterDeTai,
    isLoading,
    hocKy,
    namHoc,
    handleFilterDeTai,
    refetch,
  };
};
