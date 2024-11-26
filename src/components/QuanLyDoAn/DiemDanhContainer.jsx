import Card from "../../ui/Card";
import StyledTable from "../../ui/Table";
import formatVieNamDate, { formatVieNamHour } from "../../utils/FormatDate";
import DiemDanhButton from "./DiemDanh/DiemDanhButton";

function DiemDanhContainer({ doAn }) {
  const diemDanh1 = doAn.sinhVien1.diemDanh || null;
  const diemDanh2 = doAn.sinhVien2.diemDanh || null;
  return (
    <div>
      <h5>Điểm danh</h5>
      <Card className="p-2">
        <DiemDanhButton />
        <StyledTable>
          <thead>
            <tr>
              <td>Mã sinh viên</td>
              <td>Tên sinh viên</td>
              <td>Ngày</td>
              <td>Giờ</td>
              <td>Phòng</td>
              <td>Ghi chú</td>
            </tr>
          </thead>
          <tbody>
            {diemDanh1 &&
              diemDanh1?.map((dd) => (
                <tr>
                  <td colSpan={2}>{doAn.sinhVien1.maSo}</td>
                  <td colSpan={2}>{doAn.sinhVien1.hoten}</td>
                  <td colSpan={2}>{formatVieNamDate(dd.ngay)}</td>
                  <td>{formatVieNamHour(dd.ngay)}</td>
                  <td>{dd.phong}</td>
                  <td>{dd.ghiChu}</td>
                </tr>
              ))}{" "}
            {diemDanh2 &&
              diemDanh2?.map((dd) => (
                <tr>
                  <td colSpan={2}>{doAn.sinhVien1.maSo}</td>
                  <td colSpan={2}>{doAn.sinhVien1.hoten}</td>
                  <td colSpan={2}>{formatVieNamDate(dd.ngay)}</td>
                  <td>{formatVieNamHour(dd.ngay)}</td>
                  <td>{dd.phong}</td>
                  <td>{dd.ghiChu}</td>
                </tr>
              ))}
          </tbody>
        </StyledTable>
      </Card>
    </div>
  );
}

export default DiemDanhContainer;
