function chamDiemHoiDong(data, doAn, tieuChi, sv1 = true) {
  let newData = {
    _id: doAn.sinhVien[`${sv1 ? 0 : 1}`].sinhVienId, // ID of the student to update
    ketQua: data[`${sv1 ? "sv1" : "sv2"}_ketQua`], // Update ketQua under "diem"

    diemHoiDong: {
      [`diemHoiDong${doAn.stt}`]: {
        diemAbet: tieuChi.Lo.map((tc, index) => ({
          stt: tc.stt,
          ten: tc.ten,
          diem: data[`${sv1 ? "sv1" : "sv2"}_Lo${index}`],
        })),
        diemTong: data[`${sv1 ? "sv1" : "sv2"}_d10`], // Total score
        ketQua: data[`${sv1 ? "sv1" : "sv2"}_ketQua`], // Update ketQua under "diem"
      },
    },
  };

  return newData;
}
export default chamDiemHoiDong;
