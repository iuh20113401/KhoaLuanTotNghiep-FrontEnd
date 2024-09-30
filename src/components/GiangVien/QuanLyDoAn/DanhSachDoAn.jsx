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
    <StyledTable>
      <thead>
        <tr>
          <th>STT</th>
          <th>Mã đồ án</th>
          <th width="25%">Tên đồ án</th>
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
