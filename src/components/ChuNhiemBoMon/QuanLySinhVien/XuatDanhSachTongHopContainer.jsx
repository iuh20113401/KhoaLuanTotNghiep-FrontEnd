import { BsFileWord } from "react-icons/bs";
import Button from "../../../ui/Button";
import { useState } from "react";
import Modal from "../../../ui/Modal";
import XuatDanhSachDoAnWord from "./XuatDanhSachDoAn";
import XuatDanhSachTongHop from "./XuatDanhSachTongHop";

function XuatDanhSachTongHopContainer({ DanhSachDoAn }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button onClick={() => setShowModal(true)}>
        <span>
          <BsFileWord />
        </span>
        Xuất danh sách tổng hợp ra file word
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
            <XuatDanhSachTongHop
              DanhSachDoAn={DanhSachDoAn}
              setShowModal={setShowModal}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}

export default XuatDanhSachTongHopContainer;
