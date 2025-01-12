import { useForm } from "react-hook-form";
import Button from "../../../ui/Button";
import StyledForm from "../../../ui/Form";
import { StyledInput, StyledTextarea } from "../../../ui/Input";
import Modal from "../../../ui/Modal";
import { useMutation } from "@tanstack/react-query";
import { guiLoiMoi } from "../../../services/SinhVien";
import toast from "react-hot-toast";
import UseUser from "../../../context/UseUser";

function LapNhomModal({ setShowModal }) {
  const { register, handleSubmit, reset } = useForm();
  const { mutate, isPending } = useMutation({
    mutationFn: guiLoiMoi,
    onSuccess: (data) => {
      toast.success(data.message);
      reset();
      setShowModal(false);
    },
    onError: (data) => {
      toast.error(data.message);
    },
  });
  function handleGuiLoiMoi(data) {
    const newData = { ...data };
    mutate(newData);
  }
  return (
    <Modal>
      <Modal.Header onClick={() => setShowModal((showModal) => !showModal)}>
        <h5>Mời sinh viên lập nhóm</h5>
      </Modal.Header>
      <Modal.Body>
        <StyledForm onSubmit={handleSubmit(handleGuiLoiMoi)}>
          <div>
            <label>Mã số sinh viên cần mời</label>
            <StyledInput
              type="text"
              placeholder="Nhập mã số sinh viên của sinh viên cần mời"
              required
              register={{ ...register("maSo", { required: true }) }}
            />
          </div>
          <div>
            <label>Nội dung (tùy chọn)</label>
            <StyledTextarea
              type="text"
              placeholder="Nhập nội dung lời mời"
              register={{ ...register("noiDung") }}
            />
          </div>
          <div>
            <p className="error">Bn có tối đ 3 lời mời</p>
          </div>
          <div>
            <Button disabled={isPending}>Gửi lời mời</Button>
          </div>
        </StyledForm>
      </Modal.Body>
    </Modal>
  );
}

export default LapNhomModal;
