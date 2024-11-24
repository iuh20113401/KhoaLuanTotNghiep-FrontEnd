import QuanLyDanhSachSinhVienContainer from "../../components/GiangVien/QuanLyDoAn/QuanLyDanhSachSinhVienContainer";
import QuanLyDeTaiHeader from "../../components/ChuNhiemBoMon/TaoThongBao/QuanLyDeTaiHeader";
import { useState } from "react";
import XemDanhSachDiemDoAn from "../../components/GiangVien/QuanLyDoAn/XemDanhSachDiemDoAn";

function XemDanhSachSinhVien() {
  const [active, setActive] = useState(0);

  const TabArr = [
    {
      header: "Danh sách sinh viên",
      content: <QuanLyDanhSachSinhVienContainer />,
    },
    {
      header: "Danh sách điểm",
      content: <XemDanhSachDiemDoAn />,
    },
  ];
  return (
    <div>
      <h5>Quản lý thông tin sinh viên </h5>
      <section className="mt-3">
        <QuanLyDeTaiHeader
          content={TabArr}
          active={active}
          setActive={setActive}
        />
        <div>{TabArr[active].content}</div>
      </section>
    </div>
  );
}

export default XemDanhSachSinhVien;
