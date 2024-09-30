import { useQuery } from "@tanstack/react-query";
import { layDanhSachSinhVienThucTapTheoGiangVien } from "../../services/SinhVien";
import FilterSinhVien from "../../components/GiangVien/QuanLyDoAn/FilterSinhVien";
import Card from "../../ui/Card";
import DanhSachSinhVienContainer from "../../components/GiangVien/QuanLyThucTap/DanhSachSInhVien/DanhSachSInhVienContainer";

function XemDanhSachSinhVienThucTap() {
  const { data, isLoading } = useQuery({
    queryKey: ["DanhSachSinhVienThucTap"],
    queryFn: layDanhSachSinhVienThucTapTheoGiangVien,
  });
  const danhSachSinhVien = !isLoading && data?.danhSachSinhVien;
  return (
    !isLoading && (
      <div>
        <h5>Xem danh sách sinh viên</h5>
        <Card className="mt-3">
          <FilterSinhVien />
          <DanhSachSinhVienContainer danhSachSinhVien={danhSachSinhVien} />
        </Card>
      </div>
    )
  );
}

export default XemDanhSachSinhVienThucTap;
