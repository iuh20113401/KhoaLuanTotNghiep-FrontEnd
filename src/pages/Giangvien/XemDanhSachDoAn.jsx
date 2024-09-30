import DanhSachDoAnContainer from "../../components/GiangVien/QuanLyDoAn/DanhSachDoAn";
import FilterDoAn from "../../components/GiangVien/QuanLyDoAn/FilterDoAn";
import { useSearchParams } from "react-router-dom";
import Card from "../../ui/Card";
import BieuMauChung from "../../components/GiangVien/QuanLyDoAn/BieuMauChung";
import { sortDoAnList } from "../../utils/SortDoAn"; // Sorting logic
import { useDanhSachDoAn } from "../../hooks/UseDanhSachDoAn";
import { layDanhSachDoAnTheoGiangVien } from "../../services/DoAn";

function XemDanhSachDoAn() {
  const [searchParams] = useSearchParams();
  const { DanhSachDoAn, filterDoAn, handleFilterDoAn, isLoading } =
    useDanhSachDoAn({ key: "DanhSachDoAn", fn: layDanhSachDoAnTheoGiangVien });
  const sortBy = searchParams.get("sortBy");

  const sortedDoAn = sortDoAnList(filterDoAn, sortBy);

  return (
    !isLoading && (
      <div>
        <h5>Danh sách đồ án</h5>
        <Card className="mt-3 p-3">
          <BieuMauChung />
        </Card>
        <Card className="mt-3">
          <FilterDoAn handleFilterDoAn={handleFilterDoAn} />
          {sortedDoAn && <DanhSachDoAnContainer DanhSachDoAn={sortedDoAn} />}
        </Card>
      </div>
    )
  );
}

export default XemDanhSachDoAn;
