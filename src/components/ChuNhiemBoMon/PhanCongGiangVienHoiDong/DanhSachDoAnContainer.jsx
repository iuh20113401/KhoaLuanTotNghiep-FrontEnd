import StyledTable from "../../../ui/Table";
import ChiTietDoAn from "./ChiTietDoAn";

function DanhSachDoAnContainer({ DanhSachDoAn }) {
  const sortedProjects = DanhSachDoAn.sort(
    (a, b) => b.diemTrungBinhTong - a.diemTrungBinhTong
  );

  const top20PercentIndex = Math.ceil(sortedProjects.length * 0.2);
  const top20Projects = sortedProjects.slice(0, top20PercentIndex);
  const remainingProjects = sortedProjects.slice(top20PercentIndex);
  return DanhSachDoAn?.length > 0 ? (
    <>
      <h6>Danh sách top 20% khóa luận có điểm cao nhất</h6>

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
            {top20Projects.map((da, index) => (
              <ChiTietDoAn key={da.maDoAn} doAn={da} isPoster={false} />
            ))}
          </>
        </tbody>
      </StyledTable>
      <h6>Danh sách các khóa luận khác</h6>

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
            {remainingProjects.map((da, index) => (
              <ChiTietDoAn key={da.maDoAn} doAn={da} isPoster={true} />
            ))}
          </>
        </tbody>
      </StyledTable>
    </>
  ) : (
    "Hiện chưa có khóa luận nào để phân công"
  );
}
export default DanhSachDoAnContainer;
