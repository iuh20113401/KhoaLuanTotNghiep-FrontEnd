import { useQuery } from "@tanstack/react-query";
import { layDanhSachSinhVienThucTapTheoGiangVien } from "../../services/SinhVien";
import FilterSinhVien from "../../components/GiangVien/QuanLyDoAn/XemDanhSachSinhVien/FilterSinhVien";
import Card from "../../ui/Card";
import DanhSachSinhVienContainer from "../../components/GiangVien/QuanLyThucTap/DanhSachSInhVien/DanhSachSInhVienContainer";
import LoadingSpinner from "../../ui/Spinner";
import { useDanhSachBaoCao } from "../../hooks/useDanhSachBaoCao";

function XemDanhSachSinhVienThucTap() {
  const {
    DanhSachBaoCao,
    filterBaoCao,
    handleFilterBaoCao,
    isLoading,
    hocKy,
    namHoc,
    refetch,
  } = useDanhSachBaoCao({
    key: "DanhSachSinhVienThucTap",
    fn: layDanhSachSinhVienThucTapTheoGiangVien,
  });

  const danhSachSinhVien = !isLoading && DanhSachBaoCao;
  return (
    <div>
      <h5>Xem danh sách sinh viên</h5>
      <Card className="mt-3">
        <FilterSinhVien
          hocKy={hocKy}
          namHoc={namHoc}
          handleFilterSinhVien={handleFilterBaoCao}
        />

        {isLoading && DanhSachBaoCao?.length > 0 ? (
          <div className="p-5">
            <LoadingSpinner />
          </div>
        ) : DanhSachBaoCao?.length > 0 ? (
          <>
            <DanhSachSinhVienContainer danhSachSinhVien={filterBaoCao} />
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
