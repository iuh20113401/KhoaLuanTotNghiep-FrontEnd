import DanhSachToanBoDoAnContainer from "../../components/ChuNhiemBoMon/QuanLySinhVien/DanhSachToanBoDoAn";
import FilterDoAn from "../../components/GiangVien/QuanLyDoAn/FilterDoAn";
import Card from "../../ui/Card";
import XuatDanhSachDoAnContainer from "../../components/ChuNhiemBoMon/QuanLySinhVien/XuatDanhSachDoAnContainer";
import { layDanhSachToanBoDoAn } from "../../services/DoAn";
import XuatDanhSachDiemContainer from "../../components/ChuNhiemBoMon/QuanLySinhVien/XuatDanhSachDiemContainer";
import XuatDanhSachTongHopContainer from "../../components/ChuNhiemBoMon/QuanLySinhVien/XuatDanhSachTongHopContainer";
import XuatDanhSachTrangThaiDoAnGiuaKyContainer from "../../components/ChuNhiemBoMon/QuanLySinhVien/XuatDanhSachTrangThaiDoAnGiuaKyContainer";
import { useDanhSachDoAn } from "../../hooks/useDanhSachDoAn";
import { useSearchParams } from "react-router-dom";
import { sortDoAnList } from "../../utils/SortDoAn";
import LoadingSpinner from "../../ui/Spinner";

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
  return (
    <div>
      <h5>Quản lý thông tin khóa luận</h5>

      <Card className="mt-3">
        {" "}
        {!isLoading && sortedDoAn.length > 0 && (
          <>
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
          </>
        )}
        <FilterDoAn
          handleFilterDoAn={handleFilterDoAn}
          hocKy={hocKy}
          namHoc={namHoc}
        />
        {isLoading ? (
          <div className="p-5">
            {" "}
            <LoadingSpinner />
          </div>
        ) : sortedDoAn.length > 0 ? (
          <>
            {sortedDoAn && (
              <DanhSachToanBoDoAnContainer DanhSachDoAn={sortedDoAn} />
            )}
          </>
        ) : (
          <div className="p-3">
            <p>Hiện tại chưa có khóa luận nào trong kỳ này</p>
          </div>
        )}
      </Card>
    </div>
  );
}

export default QuanLyThongTinDoAn;
