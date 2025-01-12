import StyledTable from "../../../ui/Table";
import ChiTietDoAn from "./ChiTietDoAn";

function DanhSachDoAnContainer({
  chamDiem = false,
  tieuChi,
  DanhSachDoAn,
  loai,
  refetch,
}) {
  return (
    <StyledTable className="striped">
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
            <ChiTietDoAn
              doAn={da}
              index={index}
              chamDiem={chamDiem}
              tieuChi={tieuChi}
              key={da._id}
              loai={loai}
              refetch={refetch}
            />
          );
        })}
      </tbody>
    </StyledTable>
  );
}

export default DanhSachDoAnContainer;
