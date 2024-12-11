import StyledTable from "../../../ui/Table";
import ChiTietDoAnHoiDong from "./ChiTietDoAnHoiDong";

function DanhSachDoAnHoiDongContainer({ DanhSachDoAn, refetch }) {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>STT</th>
          <th>Mã khóa luận</th>
          <th width="25%">Tên khóa luận</th>
          <th>Mã sinh viên</th>
          <th width="20%">Tên sinh viên</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {DanhSachDoAn.map((da, index) => {
          return (
            <ChiTietDoAnHoiDong
              doAn={da}
              index={index}
              key={da._id}
              refetch={refetch}
              chamDiem={true}
            />
          );
        })}
      </tbody>
    </StyledTable>
  );
}

export default DanhSachDoAnHoiDongContainer;
