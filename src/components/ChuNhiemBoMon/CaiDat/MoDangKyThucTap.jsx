import { useState } from "react";
import Button from "../../../ui/Button";
import Modal from "../../../ui/Modal";
import { useMutation } from "@tanstack/react-query";
import { moDangKyThucTap } from "../../../services/CaiDat";
import toast from "react-hot-toast";

function MoDangKyThucTap({ refetch }) {
  const [showModal, setShowModal] = useState(false);
  const { mutate, isPending } = useMutation({
    mutationFn: moDangKyThucTap,
    onSuccess: () => {
      toast.success("Mở đăng ký thành công");
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
      <div className="flex space-between align-center">
        <div>
          <p>Mở đăng ký thực</p>
          <p className="error">
            (*) Sinh viên có thể đăng ký thông tin công ty thực tập ngay sau khi
            mở
          </p>
        </div>
        <Button onClick={() => setShowModal(true)}>Mở đăng ký</Button>
      </div>
      {showModal && (
        <Modal className="" size="lg">
          <Modal.Header>
            <h5>Bạn có xác nhận muốn mở chức năng đăng ký thực tập</h5>

            <Button
              onClick={() => setShowModal(false)}
              className="btn-close"
              variation="icon"
              disabled={isPending}
            >
              X
            </Button>
          </Modal.Header>
          <p className="error pl-4">
            (*) Sinh viên có thể đăng ký thông tin công ty thực tập ngay sau khi
            bạn nhấn xác nhận
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

export default MoDangKyThucTap;
