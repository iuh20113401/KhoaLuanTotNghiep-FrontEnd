import { useState } from "react";
import { BsFileWord } from "react-icons/bs";
import Button from "../../../../ui/Button";
import Modal from "../../../../ui/Modal";
import { ColLg, StyledRow } from "../../../../ui/Row";
import ChiTietDiem from "../../../QuanLyDoAn/BieuMau/ChiTietDiem";

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
                sinhvien.diem.diemThucTap.diemGiangVien?.diemAbet?.length !==
                  0 ||
                sinhvien.diem.diemThucTap.diemDoanhNghiep?.diemAbet?.length !==
                  0
              )
            }
            state={
              !(
                sinhvien.diem.diemThucTap.diemGiangVien?.diemAbet?.length ||
                sinhvien.diem.diemThucTap.diemDoanhNghiep?.diemAbet?.length
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
            <h5>{sinhvien.Info.ten}</h5>
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
              <h6 className="text-primary">Điểm doanh nghiệp</h6>
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
                <ChiTietDiem diem={sinhvien.diem.diemThucTap.diemDoanhNghiep} />
              </>
            )}
            {sinhvien.diem.diemThucTap.diemGiangVien && (
              <>
                <h6 className="text-primary">Điểm giảng viên</h6>
                <ChiTietDiem diem={sinhvien.diem.diemThucTap.diemGiangVien} />
              </>
            )}
          </Modal.Body>
        </Modal>
      )}{" "}
    </>
  );
}

export default ChiTietSinhVien;
