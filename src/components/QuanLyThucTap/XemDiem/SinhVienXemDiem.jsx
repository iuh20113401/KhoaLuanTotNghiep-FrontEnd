import ChiTietDiem from "../BieuMau/ChiTietDiem";

function SinhVienXemDiem({ userInfo, sinhVienInfo }) {
  const diem = sinhVienInfo.diem?.diemThucTap;
  return (
    <>
      <h6>{userInfo.hoTen}</h6>
      {diem && (
        <>
          <h6 className="text-primary mt-2 mb-1">Điểm doanh nghiệp</h6>
          <ChiTietDiem diem={sinhVienInfo.diem?.diemThucTap?.diemDoanhNghiep} />
          <h6 className=" text-primary mt-2 mb-1">Điểm giảng viên</h6>
          <ChiTietDiem diem={sinhVienInfo.diem?.diemThucTap?.diemGiangVien} />
        </>
      )}
    </>
  );
}

export default SinhVienXemDiem;
