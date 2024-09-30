import { useQuery } from "@tanstack/react-query";
import DanhSachSinhVien from "../../components/GiangVien/QuanLyDoAn/DanhSachSinhVien";
import FilterSinhVien from "../../components/GiangVien/QuanLyDoAn/FilterSinhVien";
import Card from "../../ui/Card";
import { layDanhSachSinhVienTheoGiangVien } from "../../services/SinhVien";
import { useEffect, useState, useMemo, useCallback } from "react";
import { debounce } from "lodash"; // Add lodash for debouncing
import { useSearchParams } from "react-router-dom";
import XuatDanhSachSinhVienExcel from "../../components/GiangVien/QuanLyDoAn/XuatDanhSachSInhVienExcel";

function XemDanhSachSinhVien() {
  const [searchParams] = useSearchParams();
  const { data, isLoading } = useQuery({
    queryKey: ["DanhSachSinhVien"],
    queryFn: layDanhSachSinhVienTheoGiangVien,
  });

  const danhSachSinhVien = useMemo(() => data?.danhSachSinhVien || [], [data]);
  const [filterSinhVien, setFilterSinhVien] = useState(danhSachSinhVien);

  const handleFilterSinhVien = useCallback(
    debounce((value) => {
      const filtered = danhSachSinhVien.filter((sv) => {
        return sv.Info.hoTen
          .toLowerCase()
          .replace(/ /g, "")
          .includes(value.toLowerCase().replace(/ /g, "").trim());
      });
      setFilterSinhVien(filtered);
    }, 300),
    [danhSachSinhVien]
  );

  useEffect(() => {
    if (danhSachSinhVien.length > 0) setFilterSinhVien(danhSachSinhVien);
  }, [danhSachSinhVien]);

  let sortSinhVien = filterSinhVien;
  const sortBy = searchParams.get("sortBy");
  if (!sortBy) {
    sortSinhVien = filterSinhVien;
  }
  if (danhSachSinhVien && sortBy) {
    sortSinhVien = filterSinhVien.sort((a, b) => {
      const field = sortBy.split("-")[0]; // e.g., "hoTen" or "maSo"
      const direction = sortBy.split("-")[1] === "asc" ? 1 : -1;

      if (field === "hoTen") {
        return a.Info.hoTen.localeCompare(b.Info.hoTen) * direction;
      } else if (field === "maSo") {
        return (a.Info.maSo - b.Info.maSo) * direction;
      }
      return 0;
    });
  }

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <h5>Xem danh sách sinh viên</h5>
      <Card className="mt-3">
        <XuatDanhSachSinhVienExcel DanhSachSinhVien={danhSachSinhVien} />
        <FilterSinhVien handleFilterSinhVien={handleFilterSinhVien} />
        <DanhSachSinhVien danhSachSinhVien={sortSinhVien} />
      </Card>
    </div>
  );
}

export default XemDanhSachSinhVien;
