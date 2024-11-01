function chamDiemHuongDan(data, doAn, tieuChi, sv1 = true) {
  const newData = {
    _id: doAn[sv1 ? "sinhVien1Info" : "sinhVien2Info"].sinhVienId, // ID of the student to update
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
