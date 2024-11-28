import ChiTietDiem from "../BieuMau/ChiTietDiem";

function GiangVienXemDiem({ sinhVien1, sinhVien2 }) {
  return (
    <>
      <ChiTietDiemSinhVien sinhVien={sinhVien1} />
      {sinhVien2 && <ChiTietDiemSinhVien sinhVien={sinhVien2} />}
    </>
  );
}
function ChiTietDiemSinhVien({ sinhVien }) {
  return (
    <div key={sinhVien.maSo}>
      <h6>{sinhVien.hoTen}</h6>
      {sinhVien?.diem?.diemHuongDan && (
        <>
          <h6 className="text-primary mt-2 mb-1">Điểm cuối kỳ</h6>
          <ChiTietDiem diem={sinhVien?.diem?.diemHuongDan} />
        </>
      )}
      {sinhVien?.diem?.diemPhanBien?.diemPhanBien1 && (
        <>
          <h6 className=" text-primary mt-2 mb-1">Điểm phản biện1</h6>
          <ChiTietDiem diem={sinhVien?.diem?.diemPhanBien.diemPhanBien1} />
        </>
      )}{" "}
      {sinhVien?.diem?.diemPhanBien?.diemPhanBien2 && (
        <>
          <h6 className=" text-primary mt-2 mb-1">Điểm phản biện</h6>
          <ChiTietDiem diem={sinhVien?.diem?.diemPhanBien.diemPhanBien2} />
        </>
      )}
    </div>
  );
}
export default GiangVienXemDiem;
