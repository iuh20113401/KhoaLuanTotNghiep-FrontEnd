import { StyledSelect } from "../../../ui/Input";

function ChiTietDoAnPhanBien({
  DanhSachGiangVien,
  doAn,
  index,
  handleChangePhanBien,
  isAssign,
}) {
  const countSinhVien = doAn.sinhVien2 ? 1 : 2;
  const phanBien1 = doAn.giangVienPhanBien?.length
    ? doAn.giangVienPhanBien[0]
    : "";
  const phanBien2 = doAn.giangVienPhanBien?.length
    ? doAn.giangVienPhanBien[1]
    : "";

  const handlePhanBienChange = (value, reviewerIndex) => {
    handleChangePhanBien(doAn._id, reviewerIndex, value); // Pass selected value to the parent
  };
  return (
    <>
      <tr>
        <td rowSpan={2}>{index + 1}</td>
        <td rowSpan={2}>{doAn.maDoAn}</td>
        <td rowSpan={2}>{doAn.tenDoAn}</td>
        <td rowSpan={countSinhVien}>{doAn.sinhVien1.maSo}</td>
        <td rowSpan={countSinhVien}>{doAn.sinhVien1.hoTen}</td>
        <td rowSpan={2}>{doAn.giangVien.hoTen}</td>
        <td className="text-center">
          <StyledSelect
            value={phanBien1}
            onChange={(e) => handlePhanBienChange(e.target.value, 0)}
            disabled={!isAssign}
          >
            <option value="">Chọn giảng viên phản biện</option>
            {DanhSachGiangVien.map((gv) => (
              <option
                value={gv._id}
                disabled={gv._id === doAn.giangVien._id || gv._id === phanBien2}
                key={gv._id}
              >
                {gv.hoTen}
              </option>
            ))}
          </StyledSelect>
        </td>
      </tr>
      <tr>
        {doAn.sinhVien2 && (
          <>
            <td>{doAn.sinhVien2.maSo}</td>
            <td>{doAn.sinhVien2.hoTen}</td>
          </>
        )}
        <td className="text-center">
          <StyledSelect
            value={phanBien2}
            onChange={(e) => handlePhanBienChange(e.target.value, 1)}
            disabled={!isAssign}
          >
            <option value="">Chọn giảng viên phản biện</option>
            {DanhSachGiangVien.map((gv) => (
              <option
                value={gv._id}
                key={gv._id}
                disabled={gv._id === doAn.giangVien._id || gv._id === phanBien1}
              >
                {gv.hoTen}
              </option>
            ))}
          </StyledSelect>
        </td>
      </tr>
    </>
  );
}

export default ChiTietDoAnPhanBien;
