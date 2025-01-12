import { BsFileWord } from "react-icons/bs";
import Button from "../../../ui/Button";
import { useState } from "react";
import Modal from "../../../ui/Modal";
import XuatDanhSachDoAnWord from "./XuatDanhSachDoAn";

function XuatDanhSachDoAnContainer({ DanhSachDoAn }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button onClick={() => setShowModal(true)}>
        <span>
          <BsFileWord />
        </span>
        Xuất danh sách ra file word
      </Button>
      {showModal && (
        <Modal size="xl">
          <Modal.Header onClick={() => setShowModal(false)}>
            <h5>Xem danh sách đò án</h5>
          </Modal.Header>
          <Modal.Body className="p-0 m-0">
            <XuatDanhSachDoAnWord
              DanhSachDoAn={DanhSachDoAn}
              setShowModal={setShowModal}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}

export default XuatDanhSachDoAnContainer;
