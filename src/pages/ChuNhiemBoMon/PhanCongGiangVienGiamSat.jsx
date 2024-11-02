import { useQuery } from "@tanstack/react-query";

import Card from "../../ui/Card";
import { layDanhSachDangKyThucTap } from "../../services/ThucTap";
import DanhSachDangKyThucTapContainer from "../../components/ChuNhiemBoMon/PhanCongGiangVienGiamSat/DanhSachDangKyThucTapContainer";
import useCaiDatInfo from "../../hooks/useCaiDatInfo";

function PhanCongGiangVienGiamSat() {
  const { caiDatInfo, isLoading: caiDatLoading } = useCaiDatInfo();

  const { data, isLoading } = useQuery({
    queryKey: ["DanhSachThucTap"],
    queryFn: () =>
      layDanhSachDangKyThucTap(caiDatInfo.hocKy, caiDatInfo.namHoc),
    enabled: !!caiDatLoading,
  });
  const DangSachDangKyThucTap = data?.results;
  console.log(data, DangSachDangKyThucTap);
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
