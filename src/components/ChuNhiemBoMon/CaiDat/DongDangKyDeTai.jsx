import { useState } from "react";
import Button from "../../../ui/Button";
import Modal from "../../../ui/Modal";
import { useMutation } from "@tanstack/react-query";
import { dongDangKyDeTai } from "../../../services/CaiDat";
import toast from "react-hot-toast";

function DongDangKyDeTai({ refetch }) {
  const [showModal, setShowModal] = useState(false);
  const { mutate, isPending } = useMutation({
    mutationFn: dongDangKyDeTai,
    onSuccess: () => {
      toast.success("Đóng đăng ký thành công");
      setShowModal(false);
      refetch();
    },
    onError: () => {
      toast.error("Có lỗi xảy ra");
    },
  });
  function handleXacNhan() {
    mutate();
  }
  return (
    <>
      {" "}
      <div className="flex space-between align-center">
        <div>
          <p>Đóng đăng ký đề tài</p>
          <p className="error">
            (*) Sinh viên không thể thực hiện đăng ký đề tài
          </p>
        </div>
        <Button onClick={() => setShowModal(true)}>Đóng đăng ký</Button>
      </div>
      {showModal && (
        <Modal className="" size="lg">
          <Modal.Header onClick={() => setShowModal(false)}>
            <h5>Bạn có xác nhận muốn đóng chức năng đăng ký đề tài</h5>
          </Modal.Header>
          <p className="error pl-4">
            (*) Sinh viên không thể tiếp tục đăng ký đề tài ngay sau khi bạn
            nhấn xác nhận
          </p>
          <Modal.Body className="p-0 m-0">
            <div className="flex justify-center text-center">
              <Button onClick={() => handleXacNhan()} disabled={isPending}>
                Xác nhận
              </Button>
              <Button
                className="ml-2"
                variation="outline"
                bgcolor="primary-600"
                disabled={isPending}
                onClick={() => setShowModal(false)}
              >
                Hủy
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}

export default DongDangKyDeTai;
