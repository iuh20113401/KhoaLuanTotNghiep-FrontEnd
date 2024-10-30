import { useQuery } from "@tanstack/react-query";
import ResetDeTai from "../../components/ChuNhiemBoMon/CaiDat/ResetDeTai";
import Card from "../../ui/Card";
import { layThongTinCaiDat } from "../../services/CaiDat";
import MoDangKyDeTai from "../../components/ChuNhiemBoMon/CaiDat/moDangKyDeTai";
import DongDangKyDeTai from "../../components/ChuNhiemBoMon/CaiDat/DongDangKyDeTai";
import MoDangKyThucTap from "../../components/ChuNhiemBoMon/CaiDat/MoDangKyThucTap";
import DongDangKyThucTap from "../../components/ChuNhiemBoMon/CaiDat/DongDangKyThucTap";
import useCaiDatInfo from "../../hooks/useCaiDatInfo";

function CaiDat() {
  const caiDatInfo = useCaiDatInfo();
  return (
    <div>
      <h5>Cài đặt cấu hình hệ thống</h5>
      <Card className="mt-3 p-2">
        <div>
          <MoDangKyDeTai />
        </div>
        <div className="mt-2">
          <DongDangKyDeTai />
        </div>
        <div className="mt-2">
          <MoDangKyThucTap />
        </div>
        <div className="mt-2">
          <DongDangKyThucTap />
        </div>
        <div className="mt-2">
          <ResetDeTai />{" "}
        </div>
      </Card>
    </div>
  );
}

export default CaiDat;
