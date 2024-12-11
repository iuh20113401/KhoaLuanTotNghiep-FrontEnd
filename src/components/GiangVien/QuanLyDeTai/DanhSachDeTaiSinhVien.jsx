import Card from "../../../ui/Card";
import LoadingSpinner from "../../../ui/Spinner";
import DanhSachDeTaiAccordionLIst from "./DanhSachDeTaiAccordionLIst";
import DanhSachDeTaiContainer from "./DanhSachDeTaiContainer";

function DanhSachDeTaiSinhVien({
  DanhSachDeTai,

  refetch,
  isLoading,
  setIsShowTable,
  isShowTable,
  setIsEdit,
}) {
  return (
    <Card>
      {isLoading ? (
        <LoadingSpinner />
      ) : DanhSachDeTai?.length > 0 ? (
        <>
          {isShowTable ? (
            <DanhSachDeTaiContainer
              danhSachDeTai={DanhSachDeTai}
              sortedDoAn={DanhSachDeTai}
              setIsEdit={setIsEdit}
              refetch={refetch}
              isSinhVien={true}
            />
          ) : (
            <DanhSachDeTaiAccordionLIst
              danhSachDeTai={DanhSachDeTai}
              sortedDoAn={DanhSachDeTai}
              setIsEdit={setIsEdit}
              isSinhVien={true}
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

export default DanhSachDeTaiSinhVien;
