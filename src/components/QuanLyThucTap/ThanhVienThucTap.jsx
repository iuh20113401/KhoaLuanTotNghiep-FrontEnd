import Card from "../../ui/Card";
import StyledTable from "../../ui/Table";

function ThanhVienThucTap({ thucTap }) {
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
            {thucTap.giangVien && (
              <tr>
                <td>{thucTap.giangVien.maSo}</td>
                <td>{thucTap.giangVien.hoTen} </td>
                <td>Giảng viên </td>
                <td>{thucTap.giangVien.email}</td>
                <td>{thucTap.giangVien.soDienThoai}</td>
              </tr>
            )}
            <tr>
              <td>{thucTap.userId.maSo}</td>
              <td>{thucTap.userId.hoTen} </td>
              <td>Sinh viên </td>
              <td>{thucTap.userId.email}</td>
              <td>{thucTap.userId.soDienThoai}</td>
            </tr>
          </tbody>
        </StyledTable>
      </Card>
    </div>
  );
}

export default ThanhVienThucTap;
