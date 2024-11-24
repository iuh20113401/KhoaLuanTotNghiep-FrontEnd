import StyledTable from "../../../../ui/Table";
import ChiTietSInhVien from "../ChiTietSInhVien";

function DanhSachSinhVienContainer({ danhSachSinhVien }) {
  return (
    <div>
      <StyledTable>
        <thead>
          <tr>
            <th>STT</th>
            <th width="15%">Mã số sinh viên</th>
            <th width="15%">Tên sinh viên</th>
            <th width="20%">Đồ án</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th width="">Điểm</th>
          </tr>
        </thead>
        <tbody>
          {danhSachSinhVien.map((sv, index) => (
            <ChiTietSInhVien sinhvien={sv} index={index} />
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
}

export default DanhSachSinhVienContainer;
