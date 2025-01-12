import { useState } from "react";
import { CheckboxContainer } from "../../../ui/Input";
import Modal from "../../../ui/Modal";
import Button from "../../../ui/Button";
import { useMutation } from "@tanstack/react-query";
import { capNhatDoAn } from "../../../services/DoAn";
import toast from "react-hot-toast";

function CardXacNhan({ trangThai, id, refetch }) {
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState(null);
  const { mutate, isPending } = useMutation({
    mutationFn: capNhatDoAn,
    onSuccess: () => {
      toast.success("Cập nhật trạng thái đề tài thành công");
      refetch();
    },
  });
  const handleCapNhat = () => {
    mutate({ _id: id, trangThai: value });
    setShowModal(false);
  };
  return (
    <div className="p-3">
      <div>
        <CheckboxContainer
          label={"Đạt"}
          value="1"
          checked={+trangThai === 1}
          disabled={+trangThai === 2}
          onClick={(e) => {
            setShowModal(true);
            setValue(e.target.value);
          }}
        />
      </div>
      <div>
        <CheckboxContainer
          label={"Không đạt"}
          value="2"
          checked={+trangThai === 2}
          disabled={+trangThai === 1}
          onClick={(e) => {
            setShowModal(true);
            setValue(e.target.value);
          }}
        />
      </div>
      {showModal && (
        <Modal size="lg">
          <Modal.Header
            onClick={() => setShowModal((showModal) => !showModal)}
          ></Modal.Header>
          <Modal.Body>
            <h5 className="text-center">
              Bạn xác nhận muốn cho khóa luận này{" "}
              <b>{+value === 1 ? "đạt" : "không đạt"}</b>
            </h5>
            <div className="mt-3 text-center">
              <Button
                className="mr-3"
                onClick={handleCapNhat}
                disabled={isPending}
              >
                Xác nhận
              </Button>
              <Button
                bgcolor="bg-secondary-300"
                onClick={() => setShowModal((showModal) => !showModal)}
                disabled={isPending}
              >
                Hủy
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
}

export default CardXacNhan;
