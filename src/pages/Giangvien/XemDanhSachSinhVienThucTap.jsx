import { useQuery } from "@tanstack/react-query";
import { layDanhSachSinhVienThucTapTheoGiangVien } from "../../services/SinhVien";
import FilterSinhVien from "../../components/GiangVien/QuanLyDoAn/FilterSinhVien";
import Card from "../../ui/Card";
import DanhSachSinhVienContainer from "../../components/GiangVien/QuanLyThucTap/DanhSachSInhVien/DanhSachSInhVienContainer";
import LoadingSpinner from "../../ui/Spinner";

function XemDanhSachSinhVienThucTap() {
  const { data, isLoading } = useQuery({
    queryKey: ["DanhSachSinhVienThucTap"],
    queryFn: layDanhSachSinhVienThucTapTheoGiangVien,
  });
  const danhSachSinhVien = !isLoading && data?.danhSachSinhVien;
  return (
    <div>
      <h5>Xem danh sách sinh viên</h5>
      <Card className="mt-3">
        {isLoading ? (
          <div className="p-5">
            <LoadingSpinner />
          </div>
        ) : danhSachSinhVien?.length > 0 ? (
          <>
            <FilterSinhVien />
            <DanhSachSinhVienContainer danhSachSinhVien={danhSachSinhVien} />
          </>
        ) : (
          <div className="p-3">
            <p>Hiện tại chưa có sinh viên nào</p>
          </div>
        )}
      </Card>
    </div>
  );
}

export default XemDanhSachSinhVienThucTap;
