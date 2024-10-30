function chamDiemHuongDan(data, doAn, tieuChi, sv1 = true) {
  console.log(tieuChi);
  const newData = {
    _id: doAn.sinhVien[`${sv1 ? 0 : 1}`].sinhVienId, // ID of the student to update
    ketQua: data[`${sv1 ? "sv1" : "sv2"}_ketQua`], // Update ketQua under "diem"
    diemHuongDan: {
      diemAbet: tieuChi.map((tc, index) => ({
        stt: tc.stt, // Criteria number
        ten: tc.ten, // Criteria name
        diem: data[`${sv1 ? "sv1" : "sv2"}_Lo${index}`], // Score for each criterion
      })),
      diemTong: data[`${sv1 ? "sv1" : "sv2"}_d10`], // Total score
    },
  };
  return newData;
}
export default chamDiemHuongDan;
