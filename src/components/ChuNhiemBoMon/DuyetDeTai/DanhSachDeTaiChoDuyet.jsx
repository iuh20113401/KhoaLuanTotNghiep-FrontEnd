import { useSearchParams } from "react-router-dom";
import { useDanhSachDeTai } from "../../../hooks/useDanhSachDeTai";
import Card from "../../../ui/Card";
import LoadingSpinner from "../../../ui/Spinner";
import Filter from "../../GiangVien/QuanLyDeTai/Filter";
import DanhSachDeTaiChoDuyetContainer from "./DanhSachDeTai";
import { sortDoAnList } from "../../../utils/SortDoAn";
import { layDanhSachDeTaiChoDuyet } from "../../../services/DeTaiApi";

function DanhSachDeTaiChoDuyet() {
  const { DanhSachDeTai, filterDeTai, handleFilterDeTai, isLoading, refetch } =
    useDanhSachDeTai({
      key: "danhSachDeTaiChoDuyet",
      fn: layDanhSachDeTaiChoDuyet,
    });
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  const sortedDoAn = sortDoAnList(filterDeTai, sortBy);
  return (
    <Card className="mt-3">
      {isLoading ? (
        <div className="p-5">
          <LoadingSpinner />
        </div>
      ) : DanhSachDeTai?.length === 0 ? (
        <div className="p-3">
          <p>Hiện tại chưa có đề tài nào cần duyêt</p>
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
  );
}

export default DanhSachDeTaiChoDuyet;
