import { useState } from "react";
import Button from "../../../ui/Button";
import Modal from "../../../ui/Modal";

function ResetDeTai() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex space-between align-center">
        <p>Reset trạng thái đề tài</p>
        <Button onClick={() => setShowModal(true)}>Reset</Button>
      </div>
      {showModal && (
        <Modal className="" size="lg">
          <Modal.Header>
            <h5>
              Bạn có xác nhận muốn reset toàn bộ đề tài về trạng thái chờ duyệt
            </h5>

            <Button
              onClick={() => setShowModal(false)}
              className="btn-close"
              variation="icon"
            >
              X
            </Button>
          </Modal.Header>
          <p className="error pl-4">
            (*) Bạn sẽ không thể tiếp tục thực hiện các tác vụ với các đồ án
            hiện tại
          </p>
          <Modal.Body className="p-0 m-0"></Modal.Body>
        </Modal>
      )}
    </>
  );
}

export default ResetDeTai;
