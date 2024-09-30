import StyledTable from "../../../ui/Table";
import ChiTietSinhVien from "./ChiTietSinhVien";

function DanhSachToanBoSinhVien({ DanhSachSinhVien }) {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>STT</th>
          <th width="15%">Mã số sinh viên</th>
          <th width="15%">Tên sinh viên</th>
          <th>Email</th>
          <th>Số điện thoại</th>
          <th width="">Đồ án</th>
          <th width="">Thực tập</th>
          <th width="">Pretest</th>
        </tr>
      </thead>
      <tbody>
        {DanhSachSinhVien.map((sv, index) => (
          <ChiTietSinhVien key={index} sinhvien={sv} index={index} />
        ))}
      </tbody>
    </StyledTable>
  );
}

export default DanhSachToanBoSinhVien;
