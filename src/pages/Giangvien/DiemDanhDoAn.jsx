import { useQuery } from "@tanstack/react-query";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import { layDanhSachSinhVienTheoGiangVien } from "../../services/SinhVien";
import TaoMaDiemDanhCanvas from "../../components/DiemDanh/TaoMaDiemDanhCanvas";
import { createContext, useState } from "react";
import DanhSachDIemDanh from "../../components/DiemDanh/DanhSachDIemDanh";

export const DiemDanhContext = createContext();
function DiemDanhDoAn() {
  const [isDiemDanh, setIsDiemDanh] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["DanhSachSinhVien"],
    queryFn: layDanhSachSinhVienTheoGiangVien,
  });
  const danhSachSinhVien = !isLoading && data?.danhSachSinhVien;
  const loai = 0;
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
            <DanhSachDIemDanh />
          </Card>
        </DiemDanhContext.Provider>
      </div>
    )
  );
}

export default DiemDanhDoAn;
