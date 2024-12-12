import { StyledSelect } from "../../../ui/Input";
import { StyledRow } from "../../../ui/Row";
import { useContext } from "react";
import { PhanCongHoiDongContext } from "../../../pages/ChuNhiemBoMon/PhanCongGiangVienHoiDong";

function ChiTietDoAn({ doAn, isHD = false }) {
  const countSinhVien =
    doAn.sinhVien2 && Object.keys(doAn.sinhVien2).length > 0 ? 2 : 1;
  const context = useContext(PhanCongHoiDongContext);
  const { hoiDongs, posterHoiDongs, isConfirmed, handleChangeHoiDongDoAn } =
    context;
  const changeHoiDong = (e) => {
    const [loai, value] = e.target.value.split(" ");
    handleChangeHoiDongDoAn(doAn._id, +loai, +value);
  };
  console.log(`${doAn.giangVienHoiDong.loai} ${doAn.giangVienHoiDong.stt}`);
  return (
    <>
      <tr>
        <td rowSpan={countSinhVien}>{doAn.maDoAn}</td>
        <td rowSpan={countSinhVien}>{doAn.tenDoAn}</td>
        <td>{doAn.sinhVien1.maSo}</td>
        <td>{doAn.sinhVien1.hoTen}</td>
        <td rowSpan={countSinhVien}>{doAn.giangVienInfo.hoTen}</td>
        <td rowSpan={countSinhVien}>
          <StyledRow className=" align-center justify-center">
            {doAn.diemTrungBinhTong}
          </StyledRow>
        </td>
        <td rowSpan={countSinhVien}>
          <StyledSelect
            onChange={(e) => {
              changeHoiDong(e);
            }}
            disabled={!isConfirmed || isHD}
            value={
              !isHD
                ? ""
                : `${doAn.giangVienHoiDong.loai} ${doAn.giangVienHoiDong.stt}`
            }
          >
            <option value={""}>Chọn hội đồng</option>
            {hoiDongs.map((hd) => (
              <option key={hd.stt} value={`1 ${hd.stt}`}>
                Hội đồng {hd.stt + 1}
              </option>
            ))}
            {posterHoiDongs.map((hd) => (
              <option key={hd.stt} value={`2 ${hd.stt}`}>
                Hội đồng poster {hd.stt}
              </option>
            ))}
          </StyledSelect>
        </td>
      </tr>
      {doAn.sinhVien2 && (
        <tr>
          <td>{doAn.sinhVien2.maSo}</td>
          <td>{doAn.sinhVien2.hoTen}</td>
        </tr>
      )}
    </>
  );
}

export default ChiTietDoAn;
