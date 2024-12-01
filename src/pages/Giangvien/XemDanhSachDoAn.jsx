import DanhSachDoAnContainer from "../../components/GiangVien/QuanLyDoAn/DanhSachDoAn";
import FilterDoAn from "../../components/GiangVien/QuanLyDoAn/FilterDoAn";
import { useSearchParams } from "react-router-dom";
import Card from "../../ui/Card";
import BieuMauChung from "../../components/GiangVien/QuanLyDoAn/BieuMauChung";
import { sortDoAnList } from "../../utils/SortDoAn"; // Sorting logic
import { useDanhSachDoAn } from "../../hooks/useDanhSachDoAn";
import { layDanhSachDoAnTheoGiangVien } from "../../services/DoAn";
import LoadingSpinner from "../../ui/Spinner";

function XemDanhSachDoAn() {
  const [searchParams] = useSearchParams();
  const {
    DanhSachDoAn,
    filterDoAn,
    handleFilterDoAn,
    isLoading,
    hocKy,
    namHoc,
  } = useDanhSachDoAn({
    key: "DanhSachDoAn",
    fn: layDanhSachDoAnTheoGiangVien,
  });
  const sortBy = searchParams.get("sortBy");

  const sortedDoAn = sortDoAnList(filterDoAn, sortBy);

  return (
    <div>
      <h5>Danh sách đồ án</h5>
      <Card className="mt-3 p-3">
        <BieuMauChung />
      </Card>
      <Card className="mt-3">
        {!isLoading && (
          <FilterDoAn
            handleFilterDoAn={handleFilterDoAn}
            hocKy={hocKy}
            namHoc={namHoc}
          />
        )}
        {isLoading ? (
          <div className="p-5">
            <LoadingSpinner />
          </div>
        ) : DanhSachDoAn?.length > 0 ? (
          <>
            {sortedDoAn && <DanhSachDoAnContainer DanhSachDoAn={sortedDoAn} />}
          </>
        ) : (
          <div className="p-3">Hiện tại chưa có đò án nào trong kỳ này</div>
        )}
      </Card>
    </div>
  );
}

export default XemDanhSachDoAn;
