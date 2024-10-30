import DanhSachToanBoDoAnContainer from "../../components/ChuNhiemBoMon/QuanLySinhVien/DanhSachToanBoDoAn";
import FilterDoAn from "../../components/GiangVien/QuanLyDoAn/FilterDoAn";
import Card from "../../ui/Card";
import XuatDanhSachDoAnContainer from "../../components/ChuNhiemBoMon/QuanLySinhVien/XuatDanhSachDoAnContainer";
import { layDanhSachToanBoDoAn } from "../../services/DoAn";
import { useQuery } from "@tanstack/react-query";
import XuatDanhSachDiemContainer from "../../components/ChuNhiemBoMon/QuanLySinhVien/XuatDanhSachDiemContainer";
import XuatDanhSachTongHopContainer from "../../components/ChuNhiemBoMon/QuanLySinhVien/XuatDanhSachTongHopContainer";
import XuatDanhSachTrangThaiDoAnGiuaKyContainer from "../../components/ChuNhiemBoMon/QuanLySinhVien/XuatDanhSachTrangThaiDoAnGiuaKyContainer";
import { useDanhSachDoAn } from "../../hooks/useDanhSachDoAn";
import { useSearchParams } from "react-router-dom";
import { sortDoAnList } from "../../utils/SortDoAn";

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

  const sortedDoAn = sortDoAnList(filterDoAn, sortBy);
  console.log(sortedDoAn);
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
          <div className="pt-2 pr-2 text-end">
            <span>
              <XuatDanhSachTrangThaiDoAnGiuaKyContainer
                DanhSachDoAn={DanhSachDoAn}
              />
            </span>
          </div>
          <FilterDoAn
            handleFilterDoAn={handleFilterDoAn}
            hocKy={hocKy}
            namHoc={namHoc}
          />
          {sortedDoAn && (
            <DanhSachToanBoDoAnContainer DanhSachDoAn={sortedDoAn} />
          )}
        </Card>
      )}
    </div>
  );
}

export default QuanLyThongTinDoAn;
