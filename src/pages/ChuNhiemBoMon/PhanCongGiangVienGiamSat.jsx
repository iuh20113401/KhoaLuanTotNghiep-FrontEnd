import { useQuery } from "@tanstack/react-query";

import Card from "../../ui/Card";
import { layDanhSachDangKyThucTap } from "../../services/ThucTap";
import DanhSachDangKyThucTapContainer from "../../components/ChuNhiemBoMon/PhanCongGiangVienGiamSat/DanhSachDangKyThucTapContainer";
import useCaiDatInfo from "../../hooks/useCaiDatInfo";
import LoadingSpinner from "../../ui/Spinner";

function PhanCongGiangVienGiamSat() {
  const { caiDatInfo, isLoading: caiDatLoading } = useCaiDatInfo();

  const { data, isLoading } = useQuery({
    queryKey: ["DanhSachThucTap"],
    queryFn: () =>
      layDanhSachDangKyThucTap(caiDatInfo.hocKy, caiDatInfo.namHoc),
    enabled: !!caiDatLoading,
  });
  const DangSachDangKyThucTap = data?.results;
  return (
    <div>
      <h5>Phân công giảng viên giám sát</h5>
      <Card className="mt-3">
        {isLoading ? (
          <div className="p-5">
            <LoadingSpinner />
          </div>
        ) : DangSachDangKyThucTap?.length > 0 ? (
          <DanhSachDangKyThucTapContainer
            DanhSachThucTap={DangSachDangKyThucTap}
          />
        ) : (
          <div className="p-3">
            <p>Hiện chưa có sinh viên nào đăng ký thực tập</p>
          </div>
        )}
      </Card>
    </div>
  );
}

export default PhanCongGiangVienGiamSat;
