import ChiTietDiem from "../BieuMau/ChiTietDiem";

function SinhVienXemDiem({ userInfo, sinhVienInfo }) {
  return (
    <div>
      <h6>{userInfo.hoTen}</h6>
      <h6 className="text-primary mt-2 mb-1">Điểm cuối kỳ</h6>
      <ChiTietDiem diem={sinhVienInfo.diem.diemHuongDan} />
      <h6 className=" text-primary mt-2 mb-1">Điểm phản biện</h6>
      <ChiTietDiem diem={sinhVienInfo.diem.diemPhanBien} />
    </div>
  );
}

export default SinhVienXemDiem;
