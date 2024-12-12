import { layDanhSachToanBoDoAn } from "../../services/DoAn";
import { useDanhSachDoAn } from "../../hooks/useDanhSachDoAn";
import { useSearchParams } from "react-router-dom";
import { sortDoAnList } from "../../utils/SortDoAn";
import XuatDanhSachDoAnWord from "../../components/ChuNhiemBoMon/QuanLySinhVien/XuatDanhSachDoAn";
import XuatDanhSachDiemWord from "../../components/ChuNhiemBoMon/QuanLySinhVien/XuatDanhSachDiem";
import XuatDanhSachTongHop from "../../components/ChuNhiemBoMon/QuanLySinhVien/XuatDanhSachTongHop";
import DanhSachToanBoKhoanLuan from "../../components/ChuNhiemBoMon/QuanLySinhVien/DanhSachToanBoKhoanLuan";
import QuanLyDeTaiHeader from "../../components/ChuNhiemBoMon/TaoThongBao/QuanLyDeTaiHeader";
import { useState } from "react";
import Card from "../../ui/Card";

function QuanLyThongTinDoAn() {
  const [searchParams] = useSearchParams();
  const {
    DanhSachDoAn,
    filterDoAn,
    handleFilterDoAn,
    isLoading,
    hocKy,
    namHoc,
  } = useDanhSachDoAn({
    key: "DanhSachToanBoDoAn",
    fn: layDanhSachToanBoDoAn,
  });
  const sortBy = searchParams.get("sortBy");
  const [active, setActive] = useState(0);

  const sortedDoAn = sortDoAnList(filterDoAn, sortBy);
  const TabArr = [
    {
      header: "Danh sách khóa luận",
      content: (
        <DanhSachToanBoKhoanLuan
          sortedDoAn={sortedDoAn}
          DanhSachDoAn={DanhSachDoAn}
          filterDoAn={filterDoAn}
          handleFilterDoAn={handleFilterDoAn}
          isLoading={isLoading}
          hocKy={hocKy}
          namHoc={namHoc}
        />
      ),
    },
    {
      header: "Mẫu danh sách đồ án file word ",
      content: <XuatDanhSachDoAnWord DanhSachDoAn={DanhSachDoAn} />,
    },
    {
      header: "Danh sách điểm",
      content: <XuatDanhSachDiemWord DanhSachDoAn={DanhSachDoAn} />,
    },
    {
      header: "Danh sách tổng hợp",
      content: <XuatDanhSachTongHop DanhSachDoAn={DanhSachDoAn} />,
    },
  ];
  return (
    <div>
      <h5>Quản lý thông tin khóa luận</h5>
      <div className="mt-3">
        <QuanLyDeTaiHeader
          content={TabArr}
          active={active}
          setActive={setActive}
        />
      </div>
      <Card className="mt-1">{TabArr[active].content}</Card>
    </div>
  );
}

export default QuanLyThongTinDoAn;
