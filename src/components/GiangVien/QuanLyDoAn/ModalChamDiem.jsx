import { useForm } from "react-hook-form";
import Button from "../../../ui/Button";
import StyledForm from "../../../ui/Form";
import { RadioContainer, StyledInput, StyledTextarea } from "../../../ui/Input";
import Modal from "../../../ui/Modal";
import StyledTable from "../../../ui/Table";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import chamDiemHuongDan from "./ModalChamDiem/ChamDiemHuongDan";
import chamDiemPhanBien from "./ModalChamDiem/ChamDiemPhanBien";
import { capNhatDoAn } from "../../../services/DoAn";
import { capNhatSinhVien } from "../../../services/SinhVien";
import { useMobile } from "../../../context/MobileContext";

// Helper functions to update SinhVien and DoAn
const updateSinhVien = (data) => capNhatSinhVien(data);
const updateDoAn = (id, status) => capNhatDoAn({ _id: id, trangThai: status });

function ModalChamDiem({ doAn, refetch, tieuChi, setShowModal, loai }) {
  const isMobile = useMobile();
  console.log(isMobile);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const countSinhVien = doAn.sinhVien2 ? 2 : 1;

  // Handle update logic for SinhVien and DoAn
  const handleMutations = ({ newData, newData2 }) => {
    const sinhVienUpdate1 = updateSinhVien(newData);
    let sinhVienUpdate2 = true,
      doAnUpdate = true;

    if (doAn.sinhVien2) {
      sinhVienUpdate2 = updateSinhVien(newData2);
      const isBothPassed = +newData.ketQua === 2 && +newData2.ketQua === 2;
      if (isBothPassed)
        doAnUpdate = updateDoAn(doAn._id, loai === "diemPhanBien" ? 6 : 5);
    } else {
      if (+newData.ketQua === 2)
        doAnUpdate = updateDoAn(doAn._id, loai === "diemPhanBien" ? 6 : 5);
    }

    return sinhVienUpdate1 && sinhVienUpdate2 && doAnUpdate;
  };

  const { mutate: chamDiemMutate, isPending } = useMutation({
    mutationFn: handleMutations,
    onSuccess: () => {
      toast.success("Chấm điểm thành công");
      setShowModal(false);
      refetch();
    },
  });
  // Handle form submission
  const onSubmit = (data) => {
    let newData, newData2;

    if (loai === "diemHuongDan") {
      newData = chamDiemHuongDan(data, doAn, tieuChi, true);
      if (doAn.sinhVien2)
        newData2 = chamDiemHuongDan(data, doAn, tieuChi, false);
    } else if (loai === "diemPhanBien") {
      newData = chamDiemPhanBien(data, doAn, tieuChi, true);
      if (doAn.sinhVien2)
        newData2 = chamDiemPhanBien(data, doAn, tieuChi, false);
    } else {
      console.error("Invalid loai type");
    }

    chamDiemMutate({ newData, newData2 });
  };

  return (
    <Modal size="xl">
      <Modal.Header>
        <h5>Chấm điểm sinh viên</h5>
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
          <strong>Sinh viên 1:</strong> {doAn.sinhVien1.hoTen}
        </p>
        {doAn?.sinhVien2 && Object.values(doAn?.sinhVien2).length ? (
          <p>
            <strong>Sinh viên 2:</strong> {doAn.sinhVien2.hoTen}
          </p>
        ) : (
          ""
        )}
        <StyledForm className="mt-2" onSubmit={handleSubmit(onSubmit)}>
          <StyledTable className="form" headvariation="dark">
            <thead>
              <tr>
                <th rowSpan={countSinhVien}>STT</th>
                <th rowSpan={countSinhVien} width="40%">
                  LO
                </th>
                <th colSpan={countSinhVien} className="text-center" width="40%">
                  Kết quả
                </th>
                <th rowSpan={countSinhVien} width="20%">
                  Ghi chú
                </th>
              </tr>
              {countSinhVien > 1 && (
                <tr>
                  <th className="text-center">{doAn.sinhVien1.hoTen}</th>
                  <th className="text-center">{doAn.sinhVien2?.hoTen}</th>
                </tr>
              )}
            </thead>
            <tbody>
              {tieuChi.map((item, index) => (
                <tr key={item.stt}>
                  <td>{item.stt}</td>
                  <td>{item.ten}</td>
                  <td className="text-center">
                    <StyledInput
                      type="number"
                      {...register(`sv1_Lo${index}`, {
                        required: "Vui lòng nhập điểm",
                        validate: (value) =>
                          (value > 0 && value <= 4) ||
                          "Điểm phải lớn hơn 0 và nhỏ hơn 4",
                      })}
                      className={errors[`sv1_Lo${index}`] ? "error" : ""}
                      placeholder={`Nhập điểm abet  ${
                        isMobile ? "cho " + doAn.sinhVien1.hoTen : ""
                      }`}
                      min={0}
                      max={4}
                      step={1}
                    />
                    {errors[`sv1_Lo${index}`] && (
                      <p className="error-text">
                        {errors[`sv1_Lo${index}`].message}
                      </p>
                    )}
                  </td>
                  {doAn.sinhVien2 &&
                    Object.values(doAn.sinhVien2).length > 0 && (
                      <td className="text-center">
                        <StyledInput
                          type="number"
                          {...register(`sv2_Lo${index}`, {
                            required: "Vui lòng nhập điểm",
                            validate: (value) =>
                              (value > 0 && value <= 4) ||
                              "Điểm phải lớn hơn 0 và nhỏ hơn 4",
                          })}
                          className={errors[`sv2_Lo${index}`] ? "error" : ""}
                          placeholder={`Nhập điểm abet  ${
                            isMobile ? "cho " + doAn.sinhVien2.hoTen : ""
                          }`}
                          min={0}
                          max={4}
                          step={1}
                        />
                        {errors[`sv2_Lo${index}`] && (
                          <p className="error-text">
                            {errors[`sv2_Lo${index}`].message}
                          </p>
                        )}
                      </td>
                    )}
                  <td>
                    <StyledInput type="text" placeholder="Nhập ghi chú" />
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={2} className="text-center">
                  <strong>Thang điểm 10</strong>
                </td>
                <td>
                  <StyledInput
                    type="number"
                    placeholder="Thang điểm 10"
                    {...register(`sv1_d10`, {
                      required: "Vui lòng nhập điểm",
                      validate: (value) =>
                        (value >= 0 && value <= 10) ||
                        "Điểm phải lớn hơn 0 và nhỏ hơn 10",
                    })}
                    className={errors[`sv1_d10`] ? "error" : ""}
                    min={0}
                    max={10}
                    step={1}
                  />
                  {errors[`sv1_d10`] && (
                    <p className="error-text">{errors[`sv1_d10`].message}</p>
                  )}
                </td>
                {doAn.sinhVien2 && Object.values(doAn.sinhVien2).length > 0 && (
                  <td>
                    <StyledInput
                      type="number"
                      placeholder="Thang điểm 10"
                      {...register(`sv2_d10`, {
                        required: "Vui lòng nhập điểm",
                        validate: (value) =>
                          (value >= 0 && value <= 10) ||
                          "Điểm phải lớn hơn 0 và nhỏ hơn 10",
                      })}
                      className={errors[`sv2_d10`] ? "error" : ""}
                      min={0}
                      max={10}
                      step={1}
                    />
                    {errors[`sv2_d10`] && (
                      <p className="error-text">{errors[`sv2_d10`].message}</p>
                    )}
                  </td>
                )}
              </tr>
              <tr>
                <td colSpan={2} className="text-center">
                  <strong>Kết quả</strong>
                </td>
                <td>
                  <RadioContainer
                    label="Đạt"
                    value="1"
                    register={register("sv1_ketQua", {
                      required: "Kết quả cần thiết",
                    })}
                  />
                  <RadioContainer
                    label="Không đạt"
                    value="2"
                    register={register("sv1_ketQua", {
                      required: "Kết quả cần thiết",
                    })}
                  />
                </td>
                {doAn.sinhVien2 && Object.values(doAn.sinhVien2).length > 0 && (
                  <td>
                    <RadioContainer
                      label="Đạt"
                      value="1"
                      register={register("sv2_ketQua", {
                        required: "Kết quả cần thiết",
                      })}
                    />
                    <RadioContainer
                      label="Không đạt"
                      value="2"
                      register={register("sv2_ketQua", {
                        required: "Kết quả cần thiết",
                      })}
                    />
                  </td>
                )}
              </tr>
            </tbody>
          </StyledTable>
          <div className="text-end">
            <Button
              disabled={isPending}
              type="submit"
              size="block"
              className="mt-2"
            >
              {isPending ? "Đang chấm..." : "Chấm điểm"}
            </Button>
          </div>
        </StyledForm>
      </Modal.Body>
    </Modal>
  );
}

export default ModalChamDiem;
