import { CheckboxContainer } from "../../../ui/Input";
import StyledTable from "../../../ui/Table";

function DanhSachSinhVienContainer({
  DanhSachSinhVien,
  register,
  handleSinhVienSelection,
}) {
  const handleDeTaiChange = (e, sinhVienList) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      // Add sinhVien when deTai is checked
      handleSinhVienSelection("add", sinhVienList);
    } else {
      // Remove sinhVien when deTai is unchecked
      handleSinhVienSelection("remove", sinhVienList);
    }
  };

  return (
    <StyledTable>
      <thead>
        <tr>
          <td></td>
          <td>Mã sinh viên</td>
          <td>Tên sinh viên</td>
          <td>Email </td>
          <td>Điện thoại</td>
        </tr>
      </thead>
      <tbody>
        {DanhSachSinhVien.map((sv) => (
          <tr key={sv._id}>
            <td>
              <CheckboxContainer
                type="checkbox"
                register={{ ...register("deTai") }}
                onChange={(e) => handleDeTaiChange(e, [sv._id])}
              />
            </td>
            <td>{sv.maSo}</td>
            <td>{sv.hoTen}</td>
            <td>{sv.soDienThoai}</td>
            <td>{sv.email}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default DanhSachSinhVienContainer;
