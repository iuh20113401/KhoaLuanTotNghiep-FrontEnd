import Card from "../../ui/Card";
import StyledTable from "../../ui/Table";
import formatVieNamDate, { formatVieNamHour } from "../../utils/FormatDate";
import DiemDanhButton from "./DiemDanh/DiemDanhButton";

function DiemDanhContainer({ baoCao }) {
  const diemDanh1 = baoCao?.sinhVien?.diemDanh || null;
  console.log(diemDanh1);
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
              diemDanh1?.map((dd) => {
                if (+dd.loai === 1)
                  return (
                    <tr>
                      <td>{baoCao.sinhVien.maSo}</td>
                      <td>{baoCao.sinhVien.hoTen}</td>
                      <td>{formatVieNamDate(dd.ngay)}</td>
                      <td>{formatVieNamHour(dd.ngay)}</td>
                      <td>{dd.phong}</td>
                      <td>{dd.ghiChu}</td>
                    </tr>
                  );
              })}
          </tbody>
        </StyledTable>
      </Card>
    </div>
  );
}

export default DiemDanhContainer;
