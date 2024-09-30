import { useQuery } from "@tanstack/react-query";
import DanhSachDoAnHoiDongContainer from "../../components/GiangVien/ChamDiemHoiDong/DanhSachDoAnHoiDongContainer";
import FilterDoAnHoiDong from "../../components/GiangVien/ChamDiemHoiDong/FilterDoAnHoiDong";

import DanhSachTieuChi from "../../data/tieuchi";
import { layDanhSachDoAnHoiDong } from "../../services/DoAn";
import Card from "../../ui/Card";

function ChamDiemHoiDong() {
  const { data: hoiDongData, isLoading: hoiDongLoading } = useQuery({
    queryKey: ["DanhSachDoAnHoiDong"],
    queryFn: layDanhSachDoAnHoiDong,
  });
  const DanhSachDoAn = !hoiDongLoading && hoiDongData?.result;
  return (
    <div>
      <h5>Chấm điểm hội đồng</h5>
      {!hoiDongLoading && (
        <Card className="mt-3">
          <FilterDoAnHoiDong />
          <DanhSachDoAnHoiDongContainer DanhSachDoAn={DanhSachDoAn} />
        </Card>
      )}
    </div>
  );
}

export default ChamDiemHoiDong;
