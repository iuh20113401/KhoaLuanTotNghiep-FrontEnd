import { BsFileWord } from "react-icons/bs";
import DanhSachToanBoDoAnContainer from "../../components/ChuNhiemBoMon/QuanLySinhVien/DanhSachToanBoDoAn";
import FilterDoAn from "../../components/GiangVien/QuanLyDoAn/FilterDoAn";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import XuatDanhSachDoAnContainer from "../../components/ChuNhiemBoMon/QuanLySinhVien/XuatDanhSachDoAnContainer";
import { layDanhSachToanBoDoAn } from "../../services/DoAn";
import { useQuery } from "@tanstack/react-query";
import XuatDanhSachDiemContainer from "../../components/ChuNhiemBoMon/QuanLySinhVien/XuatDanhSachDiemContainer";
import XuatDanhSachTongHopContainer from "../../components/ChuNhiemBoMon/QuanLySinhVien/XuatDanhSachTongHopContainer";

function QuanLyThongTinDoAn() {
  const { data, isLoading } = useQuery({
    queryKey: ["DanhSachToanBoDoAn"],
    queryFn: layDanhSachToanBoDoAn,
  });
  const DanhSachDoAn = data?.results;
  return (
    <div>
      <h5>Quản lý thông tin đồ án</h5>
      {!isLoading && (
        <Card className="mt-3">
          <div className="pt-2 pr-2 text-end">
            <div>
              <span className="mr-2">
                <XuatDanhSachDoAnContainer DanhSachDoAn={DanhSachDoAn} />
              </span>
              <span className="mr-2">
                <XuatDanhSachDiemContainer DanhSachDoAn={DanhSachDoAn} />
              </span>
              <span>
                <XuatDanhSachTongHopContainer DanhSachDoAn={DanhSachDoAn} />
              </span>
            </div>
          </div>
          <FilterDoAn DanhSachDoAn={DanhSachDoAn} />
          <DanhSachToanBoDoAnContainer DanhSachDoAn={DanhSachDoAn} />
        </Card>
      )}
    </div>
  );
}

export default QuanLyThongTinDoAn;
