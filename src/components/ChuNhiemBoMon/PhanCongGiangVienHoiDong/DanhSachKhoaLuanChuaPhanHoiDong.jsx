import Button from "../../../ui/Button";
import Card from "../../../ui/Card";
import LoadingSpinner from "../../../ui/Spinner";
import DanhSachDoAnContainer from "./DanhSachDoAnContainer";

function DanhSachKhoaLuanChuaPhanHoiDong({
  handlePhanCong,
  updatedDoAn,
  isLoading,
  isPending,
}) {
  return (
    <div>
      <Card className="p-2 mt-2">
        <h6>Danh sách khóa luận</h6>
        {isLoading ? (
          <div>
            <LoadingSpinner />
          </div>
        ) : (
          <>
            <DanhSachDoAnContainer DanhSachDoAn={updatedDoAn} />
            <div className="text-end">
              <Button onClick={handlePhanCong} disabled={isPending}>
                Phân công hội đồng
              </Button>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}

export default DanhSachKhoaLuanChuaPhanHoiDong;
