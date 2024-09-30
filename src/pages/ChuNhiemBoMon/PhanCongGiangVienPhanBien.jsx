import { useQuery } from "@tanstack/react-query";
import DanhSachDoAnPhanBien from "../../components/ChuNhiemBoMon/PhanCongGiangVienPhanBien/DanhSachDoAnPhanBien";
import Card from "../../ui/Card";
import { layDanhSachDoAnDat } from "../../services/doAn";

function PhanCongGiangVienPhanBien() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["DanhSachDoAnDat"],
    queryFn: layDanhSachDoAnDat,
  });
  const DanhSachDoAn = data?.doAn;
  return (
    <div>
      <h5>Phân công giảng viên phản biện</h5>
      {!isLoading && (
        <Card className="mt-3">
          <DanhSachDoAnPhanBien DanhSachDoAn={DanhSachDoAn} refetch={refetch} />
        </Card>
      )}
    </div>
  );
}

export default PhanCongGiangVienPhanBien;
