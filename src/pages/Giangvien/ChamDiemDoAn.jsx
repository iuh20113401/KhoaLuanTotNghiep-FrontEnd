import DanhSachDoAnContainer from "../../components/GiangVien/QuanLyDoAn/DanhSachDoAn";
import FilterDoAn from "../../components/GiangVien/QuanLyDoAn/FilterDoAn";
import { useSearchParams } from "react-router-dom";
import Card from "../../ui/Card";
import { sortDoAnList } from "../../utils/SortDoAn"; // Sorting logic
import { useDanhSachDoAn } from "../../hooks/useDanhSachDoAn";
import { layDanhSachDoAnTheoGiangVien } from "../../services/DoAn";
import { useQuery } from "@tanstack/react-query";
import { layTieuChiHuongDan } from "../../services/TieuChi";
import XuatDanhSachDiemDoAn from "../../components/GiangVien/QuanLyDoAn/XuatDanhSachDiemDoAn";
import LoadingSpinner from "../../ui/Spinner";

function ChamDiemDoAn() {
  const [searchParams] = useSearchParams();
  const {
    DanhSachDoAn,
    refetch,
    filterDoAn,
    handleFilterDoAn,
    isLoading,
    namHoc,
    hocKy,
  } = useDanhSachDoAn({
    key: "DanhSachDoAn",
    fn: layDanhSachDoAnTheoGiangVien,
  });
  const sortBy = searchParams.get("sortBy");
  const { data, isLoading: tieuChiLoading } = useQuery({
    queryKey: ["tieuChiHuongDan"],
    queryFn: layTieuChiHuongDan,
  });
  const tieuChi = data?.result || [];
  const sortedDoAn = sortDoAnList(filterDoAn, sortBy);
  return (
    <div>
      <h5>Chấm điểm đồ án</h5>
      <Card className="mt-3">
        {isLoading || tieuChiLoading ? (
          <div className="p-5">
            <LoadingSpinner />
          </div>
        ) : (
          <>
            {sortedDoAn && <XuatDanhSachDiemDoAn DanhSachDoAn={sortedDoAn} />}
            <FilterDoAn
              hocKy={hocKy}
              namHoc={namHoc}
              handleFilterDoAn={handleFilterDoAn}
            />
            {sortedDoAn && (
              <DanhSachDoAnContainer
                tieuChi={tieuChi}
                chamDiem={true}
                DanhSachDoAn={sortedDoAn}
                loai="diemHuongDan"
                refetch={refetch}
              />
            )}
          </>
        )}
      </Card>
    </div>
  );
}

export default ChamDiemDoAn;
