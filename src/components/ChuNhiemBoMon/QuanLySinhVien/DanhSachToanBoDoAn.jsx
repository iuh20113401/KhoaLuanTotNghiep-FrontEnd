import { useQuery } from "@tanstack/react-query";
import StyledTable from "../../../ui/Table";
import ChiTietDoAn from "./ChiTietDoAn";
import { layDanhSachToanBoDoAn } from "../../../services/DoAn";

function DanhSachToanBoDoAnContainer({
  DanhSachDoAn,
  chamDiem = false,
  tieuChi,
}) {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>STT</th>
          <th width="15%">Mã đồ án</th>
          <th width="20%">Tên đồ án</th>
          <th width="13%">Mã sinh viên</th>
          <th>Tên sinh viên</th>
          <th width="15%">Trạng thái</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {DanhSachDoAn.map((da, index) => (
          <ChiTietDoAn
            doAn={da}
            index={index}
            chamDiem={chamDiem}
            tieuChi={tieuChi}
          />
        ))}
      </tbody>
    </StyledTable>
  );
}

export default DanhSachToanBoDoAnContainer;
