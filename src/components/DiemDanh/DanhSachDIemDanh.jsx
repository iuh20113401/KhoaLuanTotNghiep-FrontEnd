import { useContext } from "react";
import StyledTable from "../../ui/Table";
import ChiTietDiemDanh from "./ChiTietDiemDanh";
import { DiemDanhContext } from "../../pages/Giangvien/DiemDanhDoAn";

function DanhSachDIemDanh() {
  const { danhSachSinhVien } = useContext(DiemDanhContext);
  const maxDiemDanh = danhSachSinhVien.reduce(
    (acc, sv) => (acc = sv.diemDanh?.length > acc ? sv.diemDanh?.length : acc),
    -1
  );
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>STT</th>
          <th>Mã sinh viên</th>
          <th>Tên sinh viên</th>
          <th className="text-center">Số buổi điểm danh</th>
          <th className="text-center">Tỉ lệ</th>
        </tr>
      </thead>
      <tbody>
        {danhSachSinhVien.map((sv, index) => (
          <ChiTietDiemDanh
            sinhVien={sv}
            index={index + 1}
            key={sv._id}
            maxDiemDanh={maxDiemDanh}
          />
        ))}
      </tbody>
    </StyledTable>
  );
}

export default DanhSachDIemDanh;
