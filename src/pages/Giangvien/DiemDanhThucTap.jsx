import { useQuery } from "@tanstack/react-query";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import TaoMaDiemDanhCanvas from "../../components/DiemDanh/TaoMaDiemDanhCanvas";
import { useState } from "react";
import { layDanhSachSinhVienThucTapTheoGiangVien } from "../../services/SinhVien";
import DanhSachDIemDanh from "../../components/DiemDanh/DanhSachDIemDanh";
import { DiemDanhContext } from "./DiemDanhDoAn";

function DiemDanhThucTap() {
  const [isDiemDanh, setIsDiemDanh] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["DanhSachSinhVienThucTap"],
    queryFn: layDanhSachSinhVienThucTapTheoGiangVien,
  });
  const danhSachSinhVien = !isLoading && data?.results;
  const loai = 1;
  return (
    !isLoading && (
      <div>
        <h5>Điểm danh</h5>
        <DiemDanhContext.Provider value={{ danhSachSinhVien, loai }}>
          <div className="mt-3">
            <Button onClick={() => setIsDiemDanh(true)}>
              Tạo mã điểm danh
            </Button>
            {isDiemDanh && (
              <TaoMaDiemDanhCanvas setIsDiemDanh={setIsDiemDanh} />
            )}
          </div>
          <Card className="mt-3 p-3">
            <h6>Thông tin điểm danh</h6>
            <DanhSachDIemDanh danhSachSinhVien={danhSachSinhVien} />
          </Card>
        </DiemDanhContext.Provider>
      </div>
    )
  );
}

export default DiemDanhThucTap;
