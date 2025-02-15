import StyledTable from "../../../ui/Table";

const calculateGiangVienAssignment = (DanhSachGiangVien, updatedDoAn) => {
  if (!DanhSachGiangVien && !updatedDoAn) return;
  const giangVienAssignments = DanhSachGiangVien.map((gv) => {
    const soLuongDoAnPhanBien = updatedDoAn.filter((da) =>
      da?.giangVienPhanBien?.includes(gv._id)
    ).length;

    return {
      hoTen: gv.hoTen,
      maSo: gv.maSo,
      soLuongDoAnPhanBien,
    };
  });

  return giangVienAssignments;
};
function DanhSachGiangVienPhanBienTable({ DanhSachGiangVien, updatedDoAn }) {
  const giangVienAssignmentData = calculateGiangVienAssignment(
    DanhSachGiangVien,
    updatedDoAn
  );

  return (
    <div>
      <h5 className="mb-4">Số lượng khóa luận phản biện của từng giảng viên</h5>
      <StyledTable>
        <thead>
          <tr>
            <th>Họ Tên</th>
            <th>Mã Số</th>
            <th>Số Lượng khóa luận Phản Biện</th>
          </tr>
        </thead>
        <tbody>
          {giangVienAssignmentData &&
            giangVienAssignmentData.map((gv) => (
              <tr key={gv.maSo}>
                <td>{gv.hoTen}</td>
                <td>{gv.maSo}</td>
                <td>{gv.soLuongDoAnPhanBien}</td>
              </tr>
            ))}
        </tbody>
      </StyledTable>
    </div>
  );
}
export default DanhSachGiangVienPhanBienTable;
