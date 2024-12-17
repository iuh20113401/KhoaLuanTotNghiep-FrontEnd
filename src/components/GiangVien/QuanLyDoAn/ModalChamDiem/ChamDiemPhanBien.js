function chamDiemPhanBien(data, doAn, tieuChi, sv1 = true) {
  const { giangVienPhanBien } = doAn;
  let newData;

  if (+giangVienPhanBien === 1) {
    newData = {
      _id: doAn[sv1 ? "sinhVien1Info" : "sinhVien2Info"].sinhVienId, // ID of the student to update
      ketQua: data[`${sv1 ? "sv1" : "sv2"}_ketQua`], // Update ketQua under "diem"

      diemPhanBien: {
        diemPhanBien1: {
          diemAbet: tieuChi.map((tc, index) => ({
            stt: tc.stt,
            ten: tc.ten,
            diem: data[`${sv1 ? "sv1" : "sv2"}_Lo${index}`],
            ghiChu: data[`ghiChu${index}`], // Score for each criterion
          })),
          diemTong: data[`${sv1 ? "sv1" : "sv2"}_d10`], // Total score
          ketQua: data[`${sv1 ? "sv1" : "sv2"}_ketQua`],
          nhanXet: data[`nhanXet`],
        },
      },
    };
  }
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
            ghiChu: data[`ghiChu${index}`],
          })),
          diemTong: data[`${sv1 ? "sv1" : "sv2"}_d10`], // Total score
          ketQua: data[`${sv1 ? "sv1" : "sv2"}_ketQua`], // Update ketQua under "diem",
          nhanXet: data[`nhanXet`],
        },
      },
    };
  return newData;
}
export default chamDiemPhanBien;
