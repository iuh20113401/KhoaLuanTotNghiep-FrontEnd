import { ColLg, StyledRow } from "../../../ui/Row";
import ChiTietDiem from "../BieuMau/ChiTietDiem";

function SinhVienXemDiem({ userInfo, sinhVienInfo }) {
  const diem = sinhVienInfo.diem;
  const diemHuongDan = diem.diemHuongDan.diemTong || null;
  const diemPB1 = diem?.diemPhanBien?.diemPhanBien1.diemTong || null;
  const diemPB2 = diem?.diemPhanBien?.diemPhanBien2.diemTong || null;
  const diemHD1 = diem?.diemHoiDong?.diemHoiDong1?.diemTong || null;
  const diemHD2 = diem?.diemHoiDong?.diemHoiDong2?.diemTong || null;
  const diemHD3 = diem?.diemHoiDong?.diemHoiDong3?.diemTong || null;
  return (
    <div>
      <h6>{userInfo.hoTen}</h6>
      {diemHuongDan && (
        <>
          <h6 className="text-primary mt-2 mb-1">Điểm cuối kỳ</h6>
          <ChiTietDiem diem={sinhVienInfo.diem.diemHuongDan} />
        </>
      )}
      {diemPB1 && (
        <>
          <h6 className=" text-primary mt-2 mb-1">Điểm phản biện 1</h6>
          <ChiTietDiem diem={sinhVienInfo.diem.diemPhanBien.diemPhanBien1} />
        </>
      )}
      {diemPB2 && (
        <>
          {" "}
          <h6 className=" text-primary mt-2 mb-1">Điểm phản biện 2</h6>
          <ChiTietDiem diem={sinhVienInfo.diem.diemPhanBien.diemPhanBien2} />
        </>
      )}
      {diemHD1 && (
        <>
          <h6 className=" text-primary mt-2 mb-1">Điểm phản biện 1</h6>
          <ChiTietDiem diem={sinhVienInfo.diem.diemPhanBien.diemPhanBien1} />
        </>
      )}
      {diemHD2 && (
        <>
          <h6 className=" text-primary mt-2 mb-1">Điểm phản biện 1</h6>
          <ChiTietDiem diem={sinhVienInfo.diem.diemHoiDong.diemHoiDong2} />
        </>
      )}
      {diemHD3 && (
        <>
          <h6 className=" text-primary mt-2 mb-1">Điểm phản biện 1</h6>
          <ChiTietDiem diem={sinhVienInfo.diem.diemHoiDong.diemHoiDong3} />
        </>
      )}
      {diemHuongDan && diemPB1 && diemPB2 && diemHD1 && diemHD2 && diemHD3 && (
        <StyledRow>
          <ColLg className="text-center">
            <h5> Điểm tổng</h5>
          </ColLg>
          <ColLg>
            {diemHD3
              ? (diemHuongDan +
                  diemPB1 +
                  diemPB2 +
                  diemHD1 +
                  diemHD2 +
                  diemHD3) /
                6
              : (diemHuongDan + diemPB1 + diemPB2 + diemHD1 + diemHD2) / 5}
          </ColLg>
        </StyledRow>
      )}
    </div>
  );
}

export default SinhVienXemDiem;
