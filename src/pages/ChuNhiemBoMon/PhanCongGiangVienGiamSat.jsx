import { useQuery } from "@tanstack/react-query";
import DanhSachDoAnPhanBien from "../../components/ChuNhiemBoMon/PhanCongGiangVienPhanBien/DanhSachDoAnPhanBien";
import Card from "../../ui/Card";
import { layDanhSachDangKyThucTap } from "../../services/ThucTap";
import DanhSachDangKyThucTapContainer from "../../components/ChuNhiemBoMon/PhanCongGiangVienGiamSat/DanhSachDangKyThucTapContainer";

function PhanCongGiangVienGiamSat() {
  const { data, isLoading } = useQuery({
    queryKey: ["DanhSachThucTap"],
    queryFn: layDanhSachDangKyThucTap,
  });
  const DangSachDangKyThucTap = data?.results;
  return (
    <div>
      <h5>Phân công giảng viên giám sát</h5>
      {!isLoading && (
        <Card className="mt-3">
          <DanhSachDangKyThucTapContainer
            DanhSachThucTap={DangSachDangKyThucTap}
          />
        </Card>
      )}
    </div>
  );
}

export default PhanCongGiangVienGiamSat;
