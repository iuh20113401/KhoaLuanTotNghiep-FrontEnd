import { useState } from "react";
import { BsFileWord } from "react-icons/bs";
import Button from "../../../../ui/Button";
import Modal from "../../../../ui/Modal";
import { ColLg, StyledRow } from "../../../../ui/Row";
import ChiTietDiem from "../../../QuanLyDoAn/BieuMau/ChiTietDiem";
import StyledTable from "../../../../ui/Table";

const TRANG_THAI_STYLE = {
  0: {
    bgcolor: "var(--bs-secondary)",
  },
  1: { bgcolor: "var(--bs-success)" },
  2: { bgcolor: "var(--bs-danger)" },
};
function ChiTietSinhVien({ sinhvien, index }) {
  const trangThai = sinhvien.diem.ketQua;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <tr>
        <td>{index}</td>
        <td>{sinhvien.Info.maSo}</td>
        <td>{sinhvien.Info.hoTen}</td>
        <td>{sinhvien.Info.email}</td>
        <td>{sinhvien.Info.soDienThoai}</td>
        <td>{sinhvien.thucTapInfo.tenCongTy}</td>
        <td>{sinhvien.thucTapInfo.tenNguoiGiamSat}</td>
        <td>{sinhvien.thucTapInfo.soDienThoaiNguoiGiamSat}</td>
        <td>
          <Button
            // bgcolor={TRANG_THAI_STYLE[trangThai].bgcolor}
            onClick={() => setShowModal((showModal) => !showModal)}
            disabled={
              !(
                sinhvien.diem.diemThucTap.diemGiangVien !== null ||
                sinhvien.diem.diemThucTap.diemDoanhNghiep !== null
              )
            }
            state={
              !(
                sinhvien.diem.diemThucTap.diemGiangVien !== null ||
                sinhvien.diem.diemThucTap.diemDoanhNghiep !== null
              )
                ? "disabled"
                : "normal"
            }
          >
            Xem
          </Button>
        </td>
      </tr>
      {showModal && (
        <Modal size="xl">
          <Modal.Header>
            <h5>{sinhvien?.Info?.hoTen}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setShowModal((showModal) => !showModal)}
            >
              X
            </button>
          </Modal.Header>
          <Modal.Body>
            <StyledRow className="align-center">
              <h6 className="text-primary">Điểm thực tập</h6>
              <ColLg className="text-end">
                <Button>
                  <span>
                    <BsFileWord />
                  </span>
                  Xuất ra file word
                </Button>
              </ColLg>
            </StyledRow>
            {sinhvien.diem.diemThucTap.diemDoanhNghiep && (
              <>
                <h6 className="text-primary">Điểm doanh nghiệp</h6>
                <ChiTietDiemThucTap
                  diem={sinhvien.diem.diemThucTap.diemDoanhNghiep}
                />
              </>
            )}
            {sinhvien.diem.diemThucTap.diemGiangVien && (
              <>
                <h6 className="text-primary">Điểm giảng viên</h6>
                <ChiTietDiemThucTap
                  diem={sinhvien.diem.diemThucTap.diemGiangVien}
                />
              </>
            )}
          </Modal.Body>
        </Modal>
      )}{" "}
    </>
  );
}
function ChiTietDiemThucTap({ diem }) {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>LO</th>
          <th width="50%">Nội dung</th>
          <th width="10%">Điểm abet</th>
          <th width="20%">Ghi chú</th>
          <th>Thang điểm 10</th>
        </tr>
      </thead>
      <tbody>
        {diem?.map((d, index) => (
          <tr key={d.stt}>
            <td>{d.stt}</td>
            <td>{d.ten}</td>
            <td className="text-center">{d.diemAbet}</td>
            <td></td>
            {index === 0 ? (
              <td rowSpan={diem.length} className="text-center">
                {diem.diemThang10}
              </td>
            ) : (
              <td></td>
            )}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}
export default ChiTietSinhVien;
