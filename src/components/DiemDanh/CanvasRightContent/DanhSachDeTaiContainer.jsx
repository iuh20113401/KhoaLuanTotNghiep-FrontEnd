import { CheckboxContainer } from "../../../ui/Input";
import StyledTable from "../../../ui/Table";

function DanhSachDeTaiContainer({
  DanhSachDeTai,
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
    <div>
      <StyledTable>
        <thead>
          <tr>
            <td></td>
            <td width={"50%"}>Tên đề tài</td>
            <td>Số lượng đồ án</td>
            <td>Số lượng sinh viên</td>
          </tr>
        </thead>
        <tbody>
          {DanhSachDeTai.map((dt) => (
            <tr key={dt._id} className="align-center justify-center">
              <td>
                <CheckboxContainer
                  type="checkbox"
                  register={{ ...register("deTai") }}
                  onChange={(e) => handleDeTaiChange(e, dt.sinhVienIds)}
                />
              </td>
              <td>{dt.tenDeTai}</td>
              <td>{dt.soLuongDoAn}</td>
              <td>{dt.soLuongSinhVien}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
}

export default DanhSachDeTaiContainer;
