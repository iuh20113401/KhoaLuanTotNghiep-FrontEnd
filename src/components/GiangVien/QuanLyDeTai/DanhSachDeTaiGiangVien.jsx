import { useSearchParams } from "react-router-dom";
import Card from "../../../ui/Card";
import DanhSachDeTaiAccordionLIst from "./DanhSachDeTaiAccordionLIst";
import DanhSachDeTaiContainer from "./DanhSachDeTaiContainer";
import Filter from "./Filter";
import { sortDoAnList } from "../../../utils/SortDoAn";
import LoadingSpinner from "../../../ui/Spinner";

function DanhSachDeTaiGiangVien({
  DanhSachDeTai,
  handleFilterDeTai,
  filterDeTai,
  refetch,
  isLoading,
  setIsShowTable,
  isShowTable,
  setIsEdit,
}) {
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  const sortedDoAn = sortDoAnList(filterDeTai, sortBy);
  return (
    <Card>
      {isLoading ? (
        <LoadingSpinner />
      ) : DanhSachDeTai?.length > 0 ? (
        <>
          <Filter
            DanhSachDeTai={DanhSachDeTai}
            handleFilterDeTai={handleFilterDeTai}
            setIsShowTable={setIsShowTable}
            isShowTable={isShowTable}
          />
          {isShowTable ? (
            <DanhSachDeTaiContainer
              danhSachDeTai={DanhSachDeTai.filter((dt) => +dt.trangThai !== 4)}
              sortedDoAn={
                sortedDoAn.filter((dt) => +dt.trangThai !== 4) ??
                DanhSachDeTai.filter((dt) => +dt.trangThai !== 4)
              }
              setIsEdit={setIsEdit}
              refetch={refetch}
            />
          ) : (
            <DanhSachDeTaiAccordionLIst
              danhSachDeTai={DanhSachDeTai}
              sortedDoAn={
                sortedDoAn.filter((dt) => +dt.trangThai !== 4) ??
                DanhSachDeTai.filter((dt) => +dt.trangThai !== 4)
              }
              setIsEdit={setIsEdit}
            />
          )}
        </>
      ) : (
        <div className="p-3">
          <p>Hiện tại chưa có đề tài nào! Nhấn nút thêm để tạo đề tài mới</p>
        </div>
      )}
    </Card>
  );
}

export default DanhSachDeTaiGiangVien;
