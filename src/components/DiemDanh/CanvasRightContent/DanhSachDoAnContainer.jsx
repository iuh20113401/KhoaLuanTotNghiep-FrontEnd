import { CheckboxContainer } from "../../../ui/Input";
import StyledTable from "../../../ui/Table";

function DanhSachDoAnContainer({
  DanhSachDoAn,
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
          <td>Mã khóa luận</td>
          <td width={"40%"}>Tên khóa luận</td>
          <td>Sinh viên 1</td>
          <td>Sinh viên 2</td>
        </tr>
      </thead>
      <tbody>
        {DanhSachDoAn.map((da) => (
          <tr key={da._id} className="align-center justify-center">
            <td>
              <CheckboxContainer
                type="checkbox"
                register={{ ...register("deTai") }}
                onChange={(e) =>
                  handleDeTaiChange(
                    e,
                    da.sinhVien.map((sv) => sv._id)
                  )
                }
              />
            </td>
            <td>{da.maDoAn}</td>
            <td>{da.tenDoAn}</td>
            <td>{da.sinhVien[0].hoTen}</td>
            <td>{da.sinhVien[1]?.hoTen || ""}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default DanhSachDoAnContainer;
