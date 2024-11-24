import ResetDeTai from "../../components/ChuNhiemBoMon/CaiDat/ResetDeTai";
import Card from "../../ui/Card";
import MoDangKyDeTai from "../../components/ChuNhiemBoMon/CaiDat/MoDangKyDeTai";
import DongDangKyDeTai from "../../components/ChuNhiemBoMon/CaiDat/DongDangKyDeTai";
import MoDangKyThucTap from "../../components/ChuNhiemBoMon/CaiDat/MoDangKyThucTap";
import DongDangKyThucTap from "../../components/ChuNhiemBoMon/CaiDat/DongDangKyThucTap";
import useCaiDatInfo from "../../hooks/useCaiDatInfo";

function CaiDat() {
  const { caiDatInfo, isLoading, refetch } = useCaiDatInfo();
  const { isDangKyDeTai, isDangKyThucTap } = isLoading ? {} : caiDatInfo;
  return (
    <div>
      <h5>Cài đặt cấu hình hệ thống</h5>
      <Card className="mt-3 p-2">
        {!isDangKyDeTai ? (
          <div>
            <MoDangKyDeTai refetch={refetch} />
          </div>
        ) : (
          <div className="mt-2">
            <DongDangKyDeTai refetch={refetch} />
          </div>
        )}
        {!isDangKyThucTap ? (
          <div className="mt-2">
            <MoDangKyThucTap refetch={refetch} />
          </div>
        ) : (
          <div className="mt-2">
            <DongDangKyThucTap refetch={refetch} />
          </div>
        )}
        <div className="mt-2">
          <ResetDeTai refetch={refetch} />
        </div>
      </Card>
    </div>
  );
}

export default CaiDat;
