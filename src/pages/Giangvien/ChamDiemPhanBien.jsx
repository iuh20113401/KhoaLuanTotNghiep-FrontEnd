import { useQuery } from "@tanstack/react-query";
import DanhSachDoAnContainer from "../../components/GiangVien/QuanLyDoAn/DanhSachDoAn";
import FilterDoAn from "../../components/GiangVien/QuanLyDoAn/FilterDoAn";
import Card from "../../ui/Card";
import { layDanhSachDoAnPhanBien } from "../../services/doAn";
import { layTieuChiPhanBien } from "../../services/TieuChi";
import { useDanhSachDoAn } from "../../hooks/UseDanhSachDoAn";
import { useSearchParams } from "react-router-dom";
import { sortDoAnList } from "../../utils/sortDoAn";

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
    refetch,
  } = useDanhSachDoAn({
    key: "DanhSachDoAnPhanBien",
    fn: layDanhSachDoAnPhanBien,
  });
  const sortBy = searchParams.get("sortBy");

  const sortedDoAn = sortDoAnList(filterDoAn, sortBy);

  const TieuChi = dataTieuChi?.result;
  const isLoading = doAnLoading || tieuChiLoading;
  return (
    <div>
      <h5>Chấm điểm phản biện</h5>
      {!isLoading && sortedDoAn && (
        <Card className="mt-3">
          <FilterDoAn handleFilterDoAn={handleFilterDoAn} />
          <DanhSachDoAnContainer
            chamDiem={true}
            DanhSachDoAn={sortedDoAn}
            tieuChi={TieuChi}
            loai="diemPhanBien"
            refetch={refetch}
          />
        </Card>
      )}
    </div>
  );
}

export default ChamDiemPhanBien;
