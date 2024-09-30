import { useContext, useState } from "react";
import formatVieNamDate, { formatVieNamHour } from "../../utils/FormatDate";
import { DiemDanhContext } from "../../pages/Giangvien/DiemDanhDoAn";

function ChiTietDiemDanh({ sinhVien, index, maxDiemDanh }) {
  const { loai } = useContext(DiemDanhContext);
  const info = sinhVien.Info;
  const diemDanh = sinhVien.diemDanh?.filter((dd) => dd?.loai === loai);
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <tr
        style={{ cursor: "pointer" }}
        onClick={() => setIsShow((isShow) => !isShow)}
      >
        <td>{index}</td>
        <td>{info.maSo}</td>
        <td>{info.hoTen}</td>
        <td className="text-center">{diemDanh?.length || 0}</td>
        <td className="text-center">{`${
          (diemDanh?.length / maxDiemDanh) * 100 || 0
        }%`}</td>
      </tr>
      {isShow && (
        <>
          <tr>
            <td colSpan={2}>
              <b>Ngày</b>
            </td>
            <td>
              <b>Giờ</b>
            </td>
            <td>
              <b>Phòng</b>
            </td>
            <td>
              <b>Ghi chú</b>
            </td>
          </tr>
          {diemDanh?.map((dd) => (
            <tr>
              <td colSpan={2}>{formatVieNamDate(dd.ngay)}</td>
              <td>{formatVieNamHour(dd.ngay)}</td>
              <td>{dd.phong}</td>
              <td>{dd.ghiChu}</td>
            </tr>
          ))}
        </>
      )}
    </>
  );
}

export default ChiTietDiemDanh;
