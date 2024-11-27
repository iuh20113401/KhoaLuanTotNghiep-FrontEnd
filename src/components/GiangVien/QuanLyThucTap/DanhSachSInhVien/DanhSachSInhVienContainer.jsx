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
        <tbody>
          {danhSachSinhVien?.map((sv, index) => (
            <ChiTietSinhVien sinhvien={sv} index={index} />
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
}
function ChiTietDiemThucTap({ diem }) {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>LO</th>
          <th width="50%">Nội dung</th>
          <th width="10%">Điểm abet</th>
          <th width="20%">Ghi chú</th>
          <th>Thang điểm 10</th>
        </tr>
      </thead>
      <tbody>
        {diem?.map((d, index) => (
          <tr key={d.stt}>
            <td>{d.stt}</td>
            <td>{d.ten}</td>
            <td className="text-center">{d.diemAbet}</td>
            <td></td>
            {index === 0 ? (
              <td rowSpan={diem.length} className="text-center">
                {diem.diemThang10}
              </td>
            ) : (
              <td></td>
            )}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}
export default DanhSachSinhVienContainer;
