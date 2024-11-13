import { useQuery } from "@tanstack/react-query";
import DanhSachDoAnPhanBien from "../../components/ChuNhiemBoMon/PhanCongGiangVienPhanBien/DanhSachDoAnPhanBien";
import Card from "../../ui/Card";
import { layDanhSachDoAnDat } from "../../services/DoAn";
import LoadingSpinner from "../../ui/Spinner";

function PhanCongGiangVienPhanBien() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["DanhSachDoAnDat"],
    queryFn: layDanhSachDoAnDat,
  });
  const DanhSachDoAn = data?.doAn;
  return (
    <div>
      <h5>Phân công giảng viên phản biện</h5>
      <Card className="mt-3">
        {isLoading ? (
          <div>
            <LoadingSpinner />
          </div>
        ) : (
          <DanhSachDoAnPhanBien DanhSachDoAn={DanhSachDoAn} refetch={refetch} />
        )}
      </Card>
    </div>
  );
}

export default PhanCongGiangVienPhanBien;
