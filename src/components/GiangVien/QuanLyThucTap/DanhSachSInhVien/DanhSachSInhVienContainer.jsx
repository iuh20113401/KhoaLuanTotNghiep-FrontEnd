import StyledTable from "../../../../ui/Table";
import ChiTietSinhVien from "./ChiTietSinhVien";

function DanhSachSinhVienContainer({ danhSachSinhVien }) {
  return (
    <div>
      <StyledTable>
        <thead>
          <tr>
            <th>STT</th>
            <th width="10%">MSSV</th>
            <th width="15%">Họ tên</th>
            <th>Email</th>
            <th>SDT</th>
            <th>Tên công ty</th>
            <th>Người giám sát</th>
            <th>SDT</th>
            <th width="">Điểm</th>
          </tr>
        </thead>
        {danhSachSinhVien.map((sv, index) => (
          <ChiTietSinhVien sinhvien={sv} index={index} />
        ))}
      </StyledTable>
    </div>
  );
}

export default DanhSachSinhVienContainer;
