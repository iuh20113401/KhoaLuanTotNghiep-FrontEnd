import { useState } from "react";
import DanhSachDeTaiChoDuyet from "../../components/ChuNhiemBoMon/DuyetDeTai/DanhSachDeTaiChoDuyet";
import DanhSachDeTaiSinhVienDangKy from "../../components/ChuNhiemBoMon/DuyetDeTai/DanhSachDeTaiSInhVienDangKy";
import QuanLyDeTaiHeader from "../../components/ChuNhiemBoMon/TaoThongBao/QuanLyDeTaiHeader";

function DuyetDeTai() {
  const [active, setActive] = useState(0);

  const TabArr = [
    {
      header: "Danh sách đề tài giảng viên",
      content: <DanhSachDeTaiChoDuyet />,
    },
    {
      header: "Danh sách đề tài sinh viên yêu cầu",
      content: <DanhSachDeTaiSinhVienDangKy />,
    },
  ];
  return (
    <div>
      <h5>Duyệt đề tài</h5>
      <div className="mt-3">
        <QuanLyDeTaiHeader
          content={TabArr}
          active={active}
          setActive={setActive}
        />
      </div>
      <div className="mt-1">{TabArr[active].content}</div>
    </div>
  );
}

export default DuyetDeTai;
