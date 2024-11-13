import { useQuery } from "@tanstack/react-query";
import DanhSachDoAnHoiDongContainer from "../../components/GiangVien/ChamDiemHoiDong/DanhSachDoAnHoiDongContainer";

import { layDanhSachDoAnHoiDong } from "../../services/DoAn";
import Card from "../../ui/Card";
import LoadingSpinner from "../../ui/Spinner";
import { useDanhSachDoAn } from "../../hooks/useDanhSachDoAn";
import FilterDoAn from "../../components/GiangVien/QuanLyDoAn/FilterDoAn";
import { useSearchParams } from "react-router-dom";
import { sortDoAnList } from "../../utils/SortDoAn";
import { layTieuChiPhanBien } from "../../services/TieuChi";

function ChamDiemHoiDong() {
  const [searchParams] = useSearchParams();

  const {
    DanhSachDoAn,
    filterDoAn,
    handleFilterDoAn,
    isLoading: doAnLoading,
    hocKy,
    namHoc,
    refetch,
  } = useDanhSachDoAn({
    key: "DanhSachDoAnHoiDong",
    fn: layDanhSachDoAnHoiDong,
  });
  const sortBy = searchParams.get("sortBy");

  const sortedDoAn = sortDoAnList(filterDoAn, sortBy);

  return (
    <div>
      <h5>Chấm điểm hội đồng</h5>

      <Card className="mt-3">
        {doAnLoading ? (
          <div className="p-5">
            <LoadingSpinner />
          </div>
        ) : (
          <>
            <FilterDoAn
              hocKy={hocKy}
              namHoc={namHoc}
              handleFilterDoAn={handleFilterDoAn}
            />
            <DanhSachDoAnHoiDongContainer
              chamDiem={true}
              DanhSachDoAn={sortedDoAn || DanhSachDoAn}
              refetch={refetch}
            />
          </>
        )}
      </Card>
    </div>
  );
}

export default ChamDiemHoiDong;
