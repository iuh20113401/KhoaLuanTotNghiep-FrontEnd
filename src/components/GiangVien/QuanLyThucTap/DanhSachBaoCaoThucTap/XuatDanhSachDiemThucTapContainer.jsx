import { BsFileExcel } from "react-icons/bs";
import Button from "../../../../ui/Button";
import Modal from "../../../../ui/Modal";
import { useState } from "react";
import XuatDanhSachDiemThucTapContent from "./XuatDanhSachDiemThucTapContent";

function XuatDanhSachDiemThucTapContainer({ DanhSachBaoCao }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button onClick={() => setShowModal(true)} bgcolor="bg-green-600">
        <span>
          <BsFileExcel />
        </span>
        Xuất danh sách điểm thực tập
      </Button>
      {showModal && (
        <Modal size="xl">
          <Modal.Header onClick={() => setShowModal(false)}>
            <h5>Danh sách điểm thực tập</h5>
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
