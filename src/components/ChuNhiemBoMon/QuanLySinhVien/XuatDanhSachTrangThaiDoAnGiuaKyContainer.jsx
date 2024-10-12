import { useState } from "react";
import Button from "../../../ui/Button";
import { BsFileExcel } from "react-icons/bs";
import Modal from "../../../ui/Modal";
import XuatDanhSachTrangThaiDoAnGiuaKy from "./XuatDanhSachTrangThaiDoAnGiuaKy";

function XuatDanhSachTrangThaiDoAnGiuaKyContainer({ DanhSachDoAn }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button bgcolor="var(--bs-success)" onClick={() => setShowModal(true)}>
        <span>
          <BsFileExcel />
        </span>
        Xuất danh sách trạng thái đồ án giữa kỳ
      </Button>
      {showModal && (
        <Modal size="xl">
          <Modal.Header>
            <h5>Xem danh sách đò án</h5>
            <Button
              onClick={() => setShowModal(false)}
              className="btn-close"
              variation="icon"
            >
              X
            </Button>
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
