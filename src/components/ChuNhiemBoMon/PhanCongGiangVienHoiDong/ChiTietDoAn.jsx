import { StyledSelect } from "../../../ui/Input";
import { StyledRow } from "../../../ui/Row";
import { useContext } from "react";
import { PhanCongHoiDongContext } from "../../../pages/ChuNhiemBoMon/PhanCongGiangVienHoiDong";

function ChiTietDoAn({ doAn, isPoster }) {
  const countSinhVien =
    doAn.sinhVien2 && Object.keys(doAn.sinhVien2).length > 0 ? 2 : 1;
  const context = useContext(PhanCongHoiDongContext);
  const { hoiDongs, posterHoiDongs, isConfirmed, handleChangeHoiDongDoAn } =
    context;

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
          {isPoster ? (
            <StyledSelect
              onChange={(e) => {
                handleChangeHoiDongDoAn(doAn._id, 2, e.target.value);
              }}
              disabled={!isConfirmed}
            >
              <option value={""}>Chọn hội đồng poster</option>
              {/* Map over available giangVien for poster review */}
              {posterHoiDongs.map((hd) => (
                <option key={hd.id} value={hd.id}>
                  Hội đồng poster {hd.id}
                </option>
              ))}
            </StyledSelect>
          ) : (
            <StyledSelect
              onChange={(e) => {
                handleChangeHoiDongDoAn(doAn._id, 1, e.target.value);
              }}
              disabled={!isConfirmed}
            >
              <option value={""}>Chọn hội đồng chính</option>
              {/* Map over available giangVien for main review */}
              {hoiDongs.map((hd) => (
                <option key={hd.id} value={hd.id}>
                  Hội đồng {hd.id}
                </option>
              ))}
            </StyledSelect>
          )}
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
