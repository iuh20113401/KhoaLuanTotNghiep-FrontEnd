import { StyledInput, StyledSelect } from "../../ui/Input";
import { useForm } from "react-hook-form";

import Modal from "../../ui/Modal";
import { Col3, Col9, StyledRow } from "../../ui/Row";
import Button from "../../ui/Button";
import { useMutation } from "@tanstack/react-query";
import { themGiangVien } from "../../services/User";
import toast from "react-hot-toast";
import LoadingSpinner from "../../ui/Spinner";

function ThemGiangVien({ setShowModal, refetch }) {
  const { register, handleSubmit } = useForm();
  const { mutate, isPending } = useMutation({
    mutationFn: themGiangVien,
    onSuccess: () => {
      toast.success("Tạo tài khoản giảng viên thành công");
      refetch();
      setShowModal(false);
    },
    onError: () => {
      toast.error("Có lỗi xảy ra");
    },
  });
  function onSubmit(data) {
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
            <h5>Thêm tài khoản giảng viên</h5>
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
                  <label htmlFor="mssv">Mã số giảng viên</label>
                </Col3>
                <Col9>
                  <StyledInput
                    type="number"
                    id="mssv"
                    placeholder="Nhập mã số giảng viên"
                    {...register(`maSo`, {
                      required: "Vui lòng đúng định dạng mã số giảng viên",
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
              {/* Vai trò */}
              <StyledRow className="mt-2">
                <Col3>
                  <label htmlFor="gioiTinh">Vai trò</label>
                </Col3>
                <Col9>
                  <StyledSelect id="vaiTro" {...register(`vaiTro`)}>
                    <option value={1}>Giảng viên</option>
                    <option value={2}>Chủ nhiệm môn học</option>
                    <option value={3}>Trưởng bộ môn</option>
                  </StyledSelect>
                </Col9>
              </StyledRow>
              <StyledRow className="mt-2">
                <Button size="block">Tạo tài khoản giảng viên</Button>
              </StyledRow>
            </form>
          </Modal.Body>
        </>
      )}
    </Modal>
  );
}

export default ThemGiangVien;
