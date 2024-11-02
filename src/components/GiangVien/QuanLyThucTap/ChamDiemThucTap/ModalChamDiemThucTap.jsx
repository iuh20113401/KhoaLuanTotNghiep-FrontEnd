import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import chamDiemDoanhNghiep from "./ChamDiemDoanhNghiep";
import chamDiemGiangVienGiamSat from "./ChamDiemGiangVienGiamSat";
import { capNhatDiemThucTap } from "../../../../services/SinhVien";
import Modal from "../../../../ui/Modal";
import Button from "../../../../ui/Button";
import StyledForm from "../../../../ui/Form";
import StyledTable from "../../../../ui/Table";
import { StyledInput, StyledTextarea } from "../../../../ui/Input";
import { useContext } from "react";
import { ChamDiemThucTapContext } from "../../../../pages/Giangvien/ChamDiemBaoCaoThucTap";

function ModalChamDiem({ thucTap, tieuChi, setShowModal, loai }) {
  const { refetch } = useContext(ChamDiemThucTapContext);
  const { userInfo } = thucTap;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate: chamDiemMuate, isPending } = useMutation({
    mutationFn: capNhatDiemThucTap,
    onSuccess: () => {
      toast.success("Chấm điểm thành công");
      setShowModal(false);
      refetch();
    },
  });
  const diem = thucTap.sinhVienInfo?.diem?.diemThucTap
    ? thucTap.sinhVienInfo?.diem?.diemThucTap[loai]
    : null;
  const isValid = diem?.length > 0;
  const onSubmit = (data) => {
    switch (loai) {
      case "diemDoanhNghiep":
        chamDiemDoanhNghiep(data, thucTap, tieuChi, chamDiemMuate);
        break;
      case "diemGiangVien":
        chamDiemGiangVienGiamSat(data, thucTap, tieuChi, chamDiemMuate);
        break;
      default:
        break;
    }
  };

  return (
    <Modal size="xl">
      <Modal.Header>
        <h5>{isValid ? "Xem điểm sinh viên" : "Chấm điểm sinh viên"}</h5>
        <Button
          onClick={() => setShowModal(false)}
          className="btn-close"
          variation="icon"
        >
          X
        </Button>
      </Modal.Header>
      <Modal.Body className="p-0 m-0">
        <p>
          <strong>Sinh viên : </strong>
          {userInfo.hoTen}
        </p>

        <StyledForm className="mt-2" onSubmit={handleSubmit(onSubmit)}>
          <StyledTable headvariation="dark" className="form">
            <thead>
              <tr>
                <th rowSpan={2}>STT</th>
                <th width="40%" rowSpan={2}>
                  LO
                </th>
                <th colSpan={2} className="text-center" width="40%">
                  Kết quả
                </th>
                <th width="20%" rowSpan={2}>
                  Ghi chú
                </th>
              </tr>
              <tr>
                <th className="text-center" width="20%">
                  Điểm Abet
                </th>
                <th className="text-center" width="20%">
                  Điểm thang 10
                </th>
              </tr>
            </thead>
            <tbody>
              {tieuChi.Lo.map((d, index) => (
                <tr key={d.stt}>
                  <td>{d.stt}</td>
                  <td>{d.ten}</td>
                  <td className="text-center">
                    <StyledInput
                      type="number"
                      {...register(`sv_abet_Lo${index}`, {
                        required: "Vui lòng nhập điểm",
                        validate: (value) =>
                          (value <= 4 && value > 0) ||
                          "Điểm phải lớn hơn 1 và nhỏ hơn 4",
                      })}
                      className={`${
                        errors[`sv1_Lo${index}`] ? "error" : ""
                      } text-center`}
                      min={1}
                      max={4}
                      step={1}
                      placeholder="Từ 1 đến 4"
                      value={diem && diem[index].diemAbet}
                      disabled={isValid}
                    />
                    {errors[`sv_abet_Lo${index}`] && (
                      <p className="error-text">
                        {errors[`sv_abet_Lo${index}`].message}
                      </p>
                    )}
                  </td>
                  <td className="text-center">
                    <StyledInput
                      type="number"
                      {...register(`sv_10_Lo${index}`, {
                        required: "Vui lòng nhập điểm",
                        validate: (value) =>
                          (value <= 10 && value >= 0) ||
                          "Điểm phải lớn hơn 0 và nhỏ hơn 10",
                      })}
                      className={`${
                        errors[`sv_10_Lo${index}`] ? "error" : ""
                      } text-center `}
                      min={0}
                      max={10}
                      value={diem && diem[index].diemThang10}
                      placeholder="Từ 0 đến 10"
                      disabled={isValid}
                    />
                    {errors[`sv_10_Lo${index}`] && (
                      <p className="error-text">
                        {errors[`sv_10_Lo${index}`].message}
                      </p>
                    )}
                  </td>
                  <td>
                    <StyledInput type="text" placeholder="Nhập ghi chú" />
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
          <h6>Nhận xét: </h6>
          <StyledTextarea placeholder="Nhận nhận xét...." />
          <div className="flex mt-3 mb-0">
            <Button
              type="submit"
              state={isValid ? "disabled" : ""}
              disabled={isPending || isValid}
            >
              Xác nhận
            </Button>
          </div>
        </StyledForm>
      </Modal.Body>
    </Modal>
  );
}

export default ModalChamDiem;
