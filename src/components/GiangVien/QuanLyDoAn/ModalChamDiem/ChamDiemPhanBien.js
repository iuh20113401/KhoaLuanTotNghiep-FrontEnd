function chamDiemPhanBien(data, doAn, tieuChi, sv1 = true) {
  const { giangVienPhanBien } = doAn;
  let newData = {
    _id: doAn[sv1 ? "sinhVien1Info" : "sinhVien2Info"].sinhVienId, // ID of the student to update
    ketQua: data[`${sv1 ? "sv1" : "sv2"}_ketQua`], // Update ketQua under "diem"

    diemPhanBien: {
      diemPhanBien1: {
        diemAbet: tieuChi.map((tc, index) => ({
          stt: tc.stt,
          ten: tc.ten,
          diem: data[`${sv1 ? "sv1" : "sv2"}_Lo${index}`],
        })),
        diemTong: data[`${sv1 ? "sv1" : "sv2"}_d10`], // Total score
        ketQua: data[`${sv1 ? "sv1" : "sv2"}_ketQua`], // Update ketQua under "diem"
      },
    },
  };
  if (+giangVienPhanBien === 2)
    newData = {
      _id: doAn[sv1 ? "sinhVien1Info" : "sinhVien2Info"].sinhVienId, // ID of the student to update
      ketQua: data[`${sv1 ? "sv1" : "sv2"}_ketQua`], // Update ketQua under "diem"
      diemPhanBien: {
        diemPhanBien2: {
          diemAbet: tieuChi.map((tc, index) => ({
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
export default chamDiemPhanBien;
