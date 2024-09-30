import ChiTietDiem from "../BieuMau/ChiTietDiem";

function GiangVienXemDiem({ sinhVien }) {
  return (
    <>
      {sinhVien.map(
        (sv) =>
          sv.constructor === Object &&
          Object.keys(sv).length > 0 && (
            <div key={sv.maSo}>
              <h6>{sv.hoTen}</h6>
              <h6 className="text-primary mt-2 mb-1">Điểm cuối kỳ</h6>
              <ChiTietDiem diem={sv.sinhVienInfo?.diem.diemHuongDan} />
              <h6 className=" text-primary mt-2 mb-1">Điểm phản biện</h6>
              <ChiTietDiem diem={sv.sinhVienInfo?.diem.diemPhanBien} />
            </div>
          )
      )}
    </>
  );
}

export default GiangVienXemDiem;
