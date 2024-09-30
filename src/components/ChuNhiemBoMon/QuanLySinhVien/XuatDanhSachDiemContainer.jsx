import { useState } from "react";
import Button from "../../../ui/Button";
import { BsFileWord } from "react-icons/bs";
import Modal from "../../../ui/Modal";
import XuatDanhSachDiemWord from "./XuatDanhSachDiem";

function XuatDanhSachDiemContainer({ DanhSachDoAn }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button onClick={() => setShowModal(true)}>
        <span>
          <BsFileWord />
        </span>
        Xuất danh sách điểm ra file word
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
            <XuatDanhSachDiemWord
              DanhSachDoAn={DanhSachDoAn}
              setShowModal={setShowModal}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}

export default XuatDanhSachDiemContainer;
