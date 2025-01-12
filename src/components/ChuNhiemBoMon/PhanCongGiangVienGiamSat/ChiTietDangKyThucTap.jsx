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
        <td>
          <p>{index + 1}</p>
        </td>
        <td>
          <p>{thucTap.tenCongTy}</p>
        </td>
        <td>
          <p>{thucTap.diaChiCongTy}</p>
        </td>
        <td>
          <p>{thucTap.userInfo.maSo}</p>
        </td>
        <td>
          <p>{thucTap.userInfo.hoTen}</p>
        </td>
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
