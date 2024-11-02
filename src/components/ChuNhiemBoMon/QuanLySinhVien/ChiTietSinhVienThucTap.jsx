function ChiTietSinhVienThucTap({ sinhvien, index }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{sinhvien.userInfo.maSo}</td>
      <td>{sinhvien.userInfo.hoTen}</td>
      <td>{sinhvien.tenCongTy}</td>
      <td>{sinhvien.diaChiCongTy}</td>
      <td>{sinhvien.emailCongTy} </td>
      <td>{sinhvien.tenNguoiGiamSat} </td>
      <td>{sinhvien.soDienThoaiNguoiGiamSat} </td>
    </tr>
  );
}

export default ChiTietSinhVienThucTap;
