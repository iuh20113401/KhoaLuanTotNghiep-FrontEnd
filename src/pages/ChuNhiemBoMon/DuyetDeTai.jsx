import DanhSachDeTaiChoDuyetContainer from "../../components/ChuNhiemBoMon/DuyetDeTai/DanhSachDeTai";
import Card from "../../ui/Card";
import { layDanhSachDeTaiChoDuyet } from "../../services/DeTaiApi";
import { useDanhSachDeTai } from "../../hooks/useDanhSachDeTai";
import { useSearchParams } from "react-router-dom";
import { sortDoAnList } from "../../utils/SortDoAn";
import LoadingSpinner from "../../ui/Spinner";
import Filter from "../../components/GiangVien/QuanLyDeTai/Filter";

function DuyetDeTai() {
  const { DanhSachDeTai, filterDeTai, handleFilterDeTai, isLoading, refetch } =
    useDanhSachDeTai({
      key: "danhSachDeTaiChoDuyet",
      fn: layDanhSachDeTaiChoDuyet,
    });
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  const sortedDoAn = sortDoAnList(filterDeTai, sortBy);
  return (
    <div>
      <h5>Duyệt đề tài</h5>
      <Card className="mt-3">
        <filterDeTai />
        {isLoading ? (
          <div className="p-5">
            <LoadingSpinner />
          </div>
        ) : (
          <>
            <Filter
              DanhSachDeTai={DanhSachDeTai}
              handleFilterDeTai={handleFilterDeTai}
            />
            <DanhSachDeTaiChoDuyetContainer
              danhSachDeTai={sortedDoAn ?? DanhSachDeTai}
              refetch={refetch}
            />
          </>
        )}
      </Card>
    </div>
  );
}

export default DuyetDeTai;
