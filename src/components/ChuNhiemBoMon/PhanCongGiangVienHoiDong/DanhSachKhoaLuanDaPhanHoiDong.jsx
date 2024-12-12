import Card from "../../../ui/Card";
import LoadingSpinner from "../../../ui/Spinner";
import StyledTable from "../../../ui/Table";
import ChiTietDoAn from "./ChiTietDoAn";

function DanhSachKhoaLuanDaPhanHoiDong({ danhSachDoAn, isLoading, isPending }) {
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
            <StyledTable>
              <thead>
                <tr>
                  <th width="11%">Mã khóa luận</th>
                  <th width="15%">Tên khóa luận</th>
                  <th width="14%">Mã sinh viên</th>
                  <th width="14%">Tên sinh viên</th>
                  <th width="15%">Giảng viên</th>
                  <th width="10%">Điểm</th>
                  <th>Chọn hội đồng</th>
                </tr>
              </thead>
              <tbody>
                <>
                  {danhSachDoAn.map((da, index) => (
                    <ChiTietDoAn key={da.maDoAn} doAn={da} isHD={true} />
                  ))}
                </>
              </tbody>
            </StyledTable>
          </>
        )}
      </Card>
    </div>
  );
}

export default DanhSachKhoaLuanDaPhanHoiDong;
