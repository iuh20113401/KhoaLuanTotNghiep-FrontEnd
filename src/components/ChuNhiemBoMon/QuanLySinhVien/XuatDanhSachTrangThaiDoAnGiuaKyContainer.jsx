import { useState } from "react";
import Button from "../../../ui/Button";
import { BsFileExcel } from "react-icons/bs";
import Modal from "../../../ui/Modal";
import XuatDanhSachTrangThaiDoAnGiuaKy from "./XuatDanhSachTrangThaiDoAnGiuaKy";

function XuatDanhSachTrangThaiDoAnGiuaKyContainer({ DanhSachDoAn }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button bgcolor="bg-green-600" onClick={() => setShowModal(true)}>
        <span>
          <BsFileExcel />
        </span>
        Xuất danh sách trạng thái khóa luận giữa kỳ
      </Button>
      {showModal && (
        <Modal size="xl">
          <Modal.Header onClick={() => setShowModal(false)}>
            <h5>Xem danh sách đò án</h5>
          </Modal.Header>
          <Modal.Body className="p-0 m-0">
            <XuatDanhSachTrangThaiDoAnGiuaKy danhSachDoAn={DanhSachDoAn} />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}
export default XuatDanhSachTrangThaiDoAnGiuaKyContainer;
