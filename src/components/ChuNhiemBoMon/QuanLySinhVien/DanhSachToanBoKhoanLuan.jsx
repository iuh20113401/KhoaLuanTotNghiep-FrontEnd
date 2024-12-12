import Card from "../../../ui/Card";
import LoadingSpinner from "../../../ui/Spinner";
import FilterDoAn from "../../GiangVien/QuanLyDoAn/FilterDoAn";
import DanhSachToanBoDoAnContainer from "./DanhSachToanBoDoAn";
function DanhSachToanBoKhoanLuan({
  sortedDoAn,
  handleFilterDoAn,
  isLoading,
  hocKy,
  namHoc,
}) {
  return (
    <Card className="mt-3">
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
  );
}

export default DanhSachToanBoKhoanLuan;
