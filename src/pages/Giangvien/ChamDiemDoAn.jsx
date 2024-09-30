import DanhSachDoAnContainer from "../../components/GiangVien/QuanLyDoAn/DanhSachDoAn";
import FilterDoAn from "../../components/GiangVien/QuanLyDoAn/FilterDoAn";
import { useSearchParams } from "react-router-dom";
import Card from "../../ui/Card";
import { sortDoAnList } from "../../utils/sortDoAn"; // Sorting logic
import { useDanhSachDoAn } from "../../hooks/UseDanhSachDoAn";
import { layDanhSachDoAnTheoGiangVien } from "../../services/DoAn";
import { useQuery } from "@tanstack/react-query";
import { layTieuChiHuongDan } from "../../services/TieuChi";
import XuatDanhSachDiemDoAn from "../../components/GiangVien/QuanLyDoAn/XuatDanhSachDiemDoAn";

function ChamDiemDoAn() {
  const [searchParams] = useSearchParams();
  const { DanhSachDoAn, refetch, filterDoAn, handleFilterDoAn, isLoading } =
    useDanhSachDoAn({ key: "DanhSachDoAn", fn: layDanhSachDoAnTheoGiangVien });
  const sortBy = searchParams.get("sortBy");
  const { data, isLoading: tieuChiLoading } = useQuery({
    queryKey: ["tieuChiHuongDan"],
    queryFn: layTieuChiHuongDan,
  });
  const tieuChi = data?.result || [];
  const sortedDoAn = sortDoAnList(filterDoAn, sortBy);
  return (
    !isLoading &&
    !tieuChiLoading && (
      <div>
        <h5>Danh sách đồ án</h5>
        <Card className="mt-3">
          {sortedDoAn && <XuatDanhSachDiemDoAn DanhSachDoAn={sortedDoAn} />}
          <FilterDoAn handleFilterDoAn={handleFilterDoAn} />
          {sortedDoAn && (
            <DanhSachDoAnContainer
              tieuChi={tieuChi}
              chamDiem={true}
              DanhSachDoAn={sortedDoAn}
              loai="diemHuongDan"
              refetch={refetch}
            />
          )}
        </Card>
      </div>
    )
  );
}

export default ChamDiemDoAn;
