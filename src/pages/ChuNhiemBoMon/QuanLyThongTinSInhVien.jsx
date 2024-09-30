import Card from "../../ui/Card";
import DanhSachToanBoSinhVien from "../../components/ChuNhiemBoMon/QuanLySinhVien/DanhSachToanBoSinhVien";
import ThemSinhVienExcel from "../../components/ChuNhiemBoMon/QuanLySinhVien/ThemSinhVienExcel";
import { useQuery } from "@tanstack/react-query";
import { layDanhSachToanBoSinhVien } from "../../services/SinhVien";

function QuanLyThongTinSInhVien() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["DanhSachToanBoSinhVien"],
    queryFn: layDanhSachToanBoSinhVien,
  });
  const DanhSachSinhVien = data?.danhSachSinhVien;
  return (
    !isLoading && (
      <div>
        <h5>Quản lý thông tin sinh viên</h5>
        <div>
          <ThemSinhVienExcel refetch={refetch} />
        </div>
        <Card className="mt-3">
          <DanhSachToanBoSinhVien DanhSachSinhVien={DanhSachSinhVien} />
        </Card>
      </div>
    )
  );
}

export default QuanLyThongTinSInhVien;
