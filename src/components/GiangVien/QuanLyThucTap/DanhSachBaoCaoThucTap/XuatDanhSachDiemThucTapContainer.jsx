import { BsFileExcel } from "react-icons/bs";
import Button from "../../../../ui/Button";
import Modal from "../../../../ui/Modal";
import { useState } from "react";
import XuatDanhSachDiemThucTapContent from "./XuatDanhSachDiemThucTapContent";

function XuatDanhSachDiemThucTapContainer({ DanhSachBaoCao }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button onClick={() => setShowModal(true)} bgcolor="var(--bs-success)">
        <span>
          <BsFileExcel />
        </span>
        Xuất danh sách điểm thực tập
      </Button>
      {showModal && (
        <Modal size="xl">
          <Modal.Header>
            <h5>Danh sách điểm thực tập</h5>
            <Button
              onClick={() => setShowModal(false)}
              className="btn-close"
              variation="icon"
            >
              X
            </Button>
          </Modal.Header>
          <Modal.Body className="p-0 m-0">
            <XuatDanhSachDiemThucTapContent DanhSachBaoCao={DanhSachBaoCao} />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}

export default XuatDanhSachDiemThucTapContainer;
