const laySinhVien = (danhSachSinhVien) => {
  return danhSachSinhVien.map((sinhVien) => {
    return {
      _id: sinhVien.Info._id,
      hoTen: sinhVien.Info.hoTen,
      maSo: sinhVien.Info.maSo,
      email: sinhVien.Info.email,
      soDienThoai: sinhVien.Info.soDienThoai,
    };
  });
};

export default laySinhVien;
