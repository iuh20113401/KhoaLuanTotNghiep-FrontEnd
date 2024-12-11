import { useQuery } from "@tanstack/react-query";
import DanhSachDoAnContainer from "../../components/GiangVien/QuanLyDoAn/DanhSachDoAn";
import FilterDoAn from "../../components/GiangVien/QuanLyDoAn/FilterDoAn";
import Card from "../../ui/Card";
import { layDanhSachDoAnPhanBien } from "../../services/DoAn";
import { layTieuChiPhanBien } from "../../services/TieuChi";
import { useDanhSachDoAn } from "../../hooks/useDanhSachDoAn";
import { useSearchParams } from "react-router-dom";
import { sortDoAnList } from "../../utils/SortDoAn";
import LoadingSpinner from "../../ui/Spinner";

function ChamDiemPhanBien() {
  const [searchParams] = useSearchParams();
  const { data: dataTieuChi, isLoading: tieuChiLoading } = useQuery({
    queryKey: ["TieuChiPhanBien"],
    queryFn: layTieuChiPhanBien,
  });
  const {
    DanhSachDoAn,
    filterDoAn,
    handleFilterDoAn,
    isLoading: doAnLoading,
    hocKy,
    namHoc,
    refetch,
  } = useDanhSachDoAn({
    key: "DanhSachDoAnPhanBien",
    fn: layDanhSachDoAnPhanBien,
  });

  const TieuChi = dataTieuChi?.result;
  const isLoading = doAnLoading || tieuChiLoading;
  const sortBy = searchParams.get("sortBy");

  const sortedDoAn = sortDoAnList(filterDoAn, sortBy);
  return (
    <div>
      <h5>Chấm điểm phản biện</h5>
      <Card className="mt-3">
        <FilterDoAn
          hocKy={hocKy}
          namHoc={namHoc}
          handleFilterDoAn={handleFilterDoAn}
        />
        {isLoading ? (
          <div className="p-5">
            <LoadingSpinner />
          </div>
        ) : DanhSachDoAn?.length > 0 ? (
          <>
            <DanhSachDoAnContainer
              chamDiem={true}
              DanhSachDoAn={sortedDoAn || DanhSachDoAn}
              tieuChi={TieuChi}
              loai="diemPhanBien"
              refetch={refetch}
            />
          </>
        ) : (
          <div className="p-3">
            <p>Chưa có khóa luận cần chấm</p>
          </div>
        )}
      </Card>
    </div>
  );
}

export default ChamDiemPhanBien;
