import { ColLg, StyledRow } from "../../../ui/Row";
import ChiTietDiem from "../BieuMau/ChiTietDiem";

function SinhVienXemDiem({ userInfo, sinhVienInfo }) {
  const diem = sinhVienInfo.diem?.diemThucTap;

  const tongDiemDoanhNghiep =
    diem?.diemDoanhNghiep.reduce((acc, d) => acc + d.diemThang10, 0) /
    diem?.diemDoanhNghiep.length;
  const tongDiemGiangVien =
    diem?.diemGiangVien.reduce((acc, d) => acc + d.diemThang10, 0) /
    diem?.diemGiangVien.length;
  return (
    <>
      <h6>{userInfo.hoTen}</h6>
      {diem && (
        <>
          <h6 className="text-primary mt-2 mb-1">Điểm doanh nghiệp</h6>
          <ChiTietDiem diem={sinhVienInfo.diem?.diemThucTap?.diemDoanhNghiep} />
          <h6 className=" text-primary mt-2 mb-1">Điểm giảng viên</h6>
          <ChiTietDiem diem={sinhVienInfo.diem?.diemThucTap?.diemGiangVien} />
          <StyledRow>
            <ColLg className="text-center">
              <h5 className="error">Tổng điểm thực tập</h5>
            </ColLg>{" "}
            <ColLg className="text-center">
              <h5 className="error">
                {((tongDiemDoanhNghiep + tongDiemGiangVien) / 2).toFixed(2)}
              </h5>
            </ColLg>
          </StyledRow>
        </>
      )}
    </>
  );
}

export default SinhVienXemDiem;
