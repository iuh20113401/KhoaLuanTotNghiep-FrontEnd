import UseUser from "../../../context/UseUser";
import Card from "../../../ui/Card";
import StyledTable from "../../../ui/Table";
import ChiTietLoiMoi from "./ChiTietLoiMoi";

function DanhSachLoiMoiContainer({ loiMoi }) {
  return (
    <Card>
      <StyledTable>
        <thead>
          <tr>
            <th>Mã số</th>
            <th>Họ tên</th>
            <th width="40%">Đồ án</th>
            <th>Giảng viên</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {loiMoi.map((lm) => (
            <ChiTietLoiMoi loiMoi={lm} />
          ))}
        </tbody>
      </StyledTable>
    </Card>
  );
}

export default DanhSachLoiMoiContainer;
