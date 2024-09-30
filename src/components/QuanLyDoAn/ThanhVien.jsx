import Card from "../../ui/Card";
import StyledTable from "../../ui/Table";

function ThanhVien({ doAn }) {
  return (
    <div>
      <h6>Thành viên</h6>
      <Card className="p-2">
        <StyledTable>
          <thead>
            <tr>
              <th>Mã số</th>
              <th>Họ tên</th>
              <th>Vai trò</th>
              <th>Email</th>
              <th>Số điện thoại</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{doAn.giangVien.maSo}</td>
              <td>{doAn.giangVien.hoTen} </td>
              <td>Giảng viên </td>
              <td>{doAn.giangVien.email}</td>
              <td>{doAn.giangVien.soDienThoai}</td>
            </tr>
            <tr>
              <td>{doAn.sinhVien1.maSo}</td>
              <td>{doAn.sinhVien1.hoTen} </td>
              <td>Sinh viên </td>
              <td>{doAn.sinhVien1.email}</td>
              <td>{doAn.sinhVien1.soDienThoai}</td>
            </tr>
            {doAn.sinhVien2 && (
              <tr>
                <td>{doAn.sinhVien2.maSo}</td>
                <td>{doAn.sinhVien2.hoTen} </td>
                <td>Sinh viên </td>
                <td>{doAn.sinhVien2.email}</td>
                <td>{doAn.sinhVien2.soDienThoai}</td>
              </tr>
            )}
          </tbody>
        </StyledTable>
      </Card>
    </div>
  );
}

export default ThanhVien;
