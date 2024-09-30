function chamDiemGiangVienGiamSat(data, baoCao, tieuChi, chamDiemMuate) {
  const newData = {
    _id: baoCao.sinhVienInfo._id, // ID of the student to update
    diemThucTap: {
      diemGiangVien: tieuChi.Lo.map((tc, index) => ({
        stt: tc.stt,
        ten: tc.ten,
        diemAbet: data[`sv_abet_Lo${index}`],
        diemThang10: data[`sv_10_Lo${index}`],
      })),
    },
  };
  chamDiemMuate(newData); // Pass the newData to your update function
}
export default chamDiemGiangVienGiamSat;
