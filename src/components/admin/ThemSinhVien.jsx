import { StyledInput, StyledSelect } from "../../ui/Input";
import { useForm } from "react-hook-form";

import Modal from "../../ui/Modal";
import { Col3, Col9, StyledRow } from "../../ui/Row";
import Button from "../../ui/Button";
import { useMutation } from "@tanstack/react-query";
import { themSinhVien } from "../../services/User";
import toast from "react-hot-toast";
import LoadingSpinner from "../../ui/Spinner";

function ThemSinhVien({ setShowModal, refetch }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate, isPending } = useMutation({
    mutationFn: themSinhVien,
    onSuccess: () => {
      toast.success("Tạo tài khoản sinh viên thành công");
      refetch();
      setShowModal(false);
    },
    onError: () => {
      toast.error("Có lỗi xảy ra");
    },
  });
  function onSubmit(data) {
    data.vaiTro = 0;
    mutate(data);
  }
  return (
    <Modal size="xl">
      {isPending ? (
        <div>
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <Modal.Header>
            <h5>Thêm tài khoản sinh viên</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setShowModal((showModal) => !showModal)}
            >
              X
            </button>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit(onSubmit)}>
              <StyledRow>
                <Col3>
                  <label htmlFor="mssv">Mã số sinh viên</label>
                </Col3>
                <Col9>
                  <StyledInput
                    type="number"
                    id="mssv"
                    placeholder="Nhập mã số sinh viên"
                    {...register(`maSo`, {
                      required: "Vui lòng đúng định dạng mã số sinh viên",
                    })}
                  />
                </Col9>
              </StyledRow>
              {/*hoTen*/}
              <StyledRow className="mt-2">
                <Col3>
                  <label htmlFor="hoTen">Họ tên</label>
                </Col3>
                <Col9>
                  <StyledInput
                    type="text"
                    id="hoTen"
                    placeholder="Nhập họ tên"
                    {...register(`hoTen`, {
                      required: "Vui lòng nhập họ tên",
                    })}
                  />
                </Col9>
              </StyledRow>
              {/*email*/}
              <StyledRow className="mt-2">
                <Col3>
                  <label htmlFor="email">Email</label>
                </Col3>
                <Col9>
                  <StyledInput
                    type="text"
                    id="email"
                    placeholder="Nhập email"
                    {...register(`email`, {
                      required: "Vui lòng nhập email",
                    })}
                  />
                </Col9>
              </StyledRow>
              {/*soDienThoai*/}
              <StyledRow className="mt-2">
                <Col3>
                  <label htmlFor="soDienThoai">Số điện thoại</label>
                </Col3>
                <Col9>
                  <StyledInput
                    type="text"
                    id="soDienThoai"
                    placeholder="Nhập số điện thoại"
                    {...register(`soDienThoai`)}
                  />
                </Col9>
              </StyledRow>
              {/*gioiTinh*/}
              <StyledRow className="mt-2">
                <Col3>
                  <label htmlFor="gioiTinh">Giới tính</label>
                </Col3>
                <Col9>
                  <StyledSelect id="gioiTinh" {...register(`gioiTinh`)}>
                    <option value={0}>Nam</option>
                    <option value={1}>Nữ</option>
                  </StyledSelect>
                </Col9>
              </StyledRow>
              {/*lop*/}
              <StyledRow className="mt-2">
                <Col3>
                  <label htmlFor="lop">Lớp</label>
                </Col3>
                <Col9>
                  <StyledInput
                    type="text"
                    id="lop"
                    placeholder="Nhập lớp"
                    {...register(`lop`)}
                  />
                </Col9>
              </StyledRow>
              <StyledRow className="mt-2">
                <Button size="block">Tạo tài khoản sinh viên</Button>
              </StyledRow>
            </form>
          </Modal.Body>
        </>
      )}
    </Modal>
  );
}

export default ThemSinhVien;
