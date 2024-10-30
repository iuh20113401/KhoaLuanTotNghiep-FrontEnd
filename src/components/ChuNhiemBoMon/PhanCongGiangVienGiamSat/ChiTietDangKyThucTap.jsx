import { StyledSelect } from "../../../ui/Input";

function ChiTietDangKyThucTap({
  DanhSachGiangVien,
  thucTap,
  index,
  handleChangeGiangVien,
}) {
  const giangVien = thucTap.giangVien || thucTap.giangVien._id || "";
  const handlePhanBienChange = (value) => {
    handleChangeGiangVien(thucTap._id, value); // Pass selected value to the parent
  };
  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{thucTap.tenCongTy}</td>
        <td>{thucTap.diaChiCongTy}</td>
        <td>{thucTap.userInfo.maSo}</td>
        <td>{thucTap.userInfo.hoTen}</td>
        <td>
          {thucTap.trangThaiThucTap === 0 ? "Chờ phỏng vấn" : "Đang làm việc"}
        </td>
        <td className="text-center">
          <StyledSelect
            value={giangVien}
            onChange={(e) => handlePhanBienChange(e.target.value)}
          >
            <option value="">Chọn giảng viên</option>
            {DanhSachGiangVien.map((gv) => (
              <option value={gv._id} key={gv._id}>
                {gv.hoTen}
              </option>
            ))}
          </StyledSelect>
        </td>
      </tr>
    </>
  );
}

export default ChiTietDangKyThucTap;
