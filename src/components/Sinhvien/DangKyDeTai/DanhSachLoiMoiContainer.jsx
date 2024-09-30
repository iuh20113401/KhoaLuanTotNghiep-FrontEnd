import UseUser from "../../../context/UseUser";
import Card from "../../../ui/Card";
import StyledTable from "../../../ui/Table";
import ChiTietLoiMoi from "./ChiTietLoiMoi";

function DanhSachLoiMoiContainer() {
  const { data: user, isLoading } = UseUser();
  const loiMoi = user.user.loiMoi;
  return (
    <Card>
      <StyledTable>
        <thead>
          <tr>
            <td>Mã số</td>
            <td>Họ tên</td>
            <td width="40%">Đồ án</td>
            <td>Giảng viên</td>
            <td></td>
          </tr>
        </thead>
        {!isLoading && loiMoi.map((lm) => <ChiTietLoiMoi loiMoi={lm} />)}
      </StyledTable>
    </Card>
  );
}

export default DanhSachLoiMoiContainer;
