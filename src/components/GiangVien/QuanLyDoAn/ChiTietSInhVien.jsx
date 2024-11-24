import { useState } from "react";
import Button from "../../../ui/Button";
import Modal from "../../../ui/Modal";
import { ColLg, StyledRow } from "../../../ui/Row";
import ChiTietDiem from "../../QuanLyDoAn/BieuMau/ChiTietDiem";
import { BsFileWord } from "react-icons/bs";

const TRANG_THAI_STYLE = {
  0: {
    bgcolor: "var(--bs-secondary)",
  },
  1: { bgcolor: "var(--bs-success)" },
  2: { bgcolor: "var(--bs-danger)" },
};
function ChiTietSInhVien({ sinhvien, index }) {
  const trangThai = sinhvien?.diem?.ketQua;
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <tr>
        <td>{index}</td>
        <td>{sinhvien.Info.maSo}</td>
        <td>{sinhvien.Info.hoTen}</td>
        <td>{sinhvien.doAnInfo.tenDoAn}</td>
        <td>{sinhvien.Info.email}</td>
        <td>{sinhvien.Info.soDienThoai}</td>
        <td>
          <Button
            bgcolor={TRANG_THAI_STYLE[trangThai]?.bgcolor}
            onClick={() => setShowModal((showModal) => !showModal)}
            disabled={!sinhvien.diem.ketQua}
            state={sinhvien.diem.ketQua || "disabled"}
          >
            Xem
          </Button>
        </td>
      </tr>
      {showModal && (
        <Modal size="xl">
          <Modal.Header>
            <h5>{sinhvien.ten}</h5>
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
              <h6 className="text-primary">Điểm hướng dãn</h6>
              <ColLg className="text-end">
                <Button>
                  <span>
                    <BsFileWord />
                  </span>
                  Xuất ra file word
                </Button>
              </ColLg>
            </StyledRow>
            <ChiTietDiem diem={sinhvien.diem.diemHuongDan} />
            {sinhvien.diem.diemPhanBien && (
              <>
                <h6 className="text-primary">Điểm phản biện</h6>
                <ChiTietDiem diem={sinhvien.diem.diemPhanBien} />
              </>
            )}
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}

export default ChiTietSInhVien;
