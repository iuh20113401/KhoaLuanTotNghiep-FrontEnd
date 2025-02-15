import { useForm } from "react-hook-form";
import Button from "../../../ui/Button";
import StyledForm from "../../../ui/Form";
import { StyledInput } from "../../../ui/Input";
import Modal from "../../../ui/Modal";
import StyledTable from "../../../ui/Table";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { capNhatDoAn } from "../../../services/DoAn";
import { capNhatSinhVien } from "../../../services/SinhVien";
import chamDiemHoiDong from "./chamDiemHoiDong";
import { layTieuChiPhanBien } from "../../../services/TieuChi";
import LoadingSpinner from "../../../ui/Spinner";

// Helper functions to update SinhVien and DoAn
const updateSinhVien = (data) => capNhatSinhVien(data);
const updateDoAn = (id, status) => capNhatDoAn({ _id: id, trangThai: status });

function ModalChamDiemHoiDong({
  doAn,
  refetch,
  setShowModal,
  chamDiem = true,
}) {
  const { data: dataTieuChi, isLoading: tieuChiLoading } = useQuery({
    queryKey: ["TieuChiHoiDong"],
    queryFn: layTieuChiPhanBien,
  });
  const tieuChi = dataTieuChi?.result;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const countSinhVien = doAn.sinhVien2 ? 2 : 1;

  // Handle update logic for SinhVien and DoAn
  const handleMutations = async ({ newData, newData2 }) => {
    const sinhVienUpdate1 = await updateSinhVien(newData);
    let sinhVienUpdate2 = true,
      doAnUpdate = true;

    if (doAn.sinhVien2) {
      sinhVienUpdate2 = await updateSinhVien(newData2);
      const isBothPassed = +newData.ketQua === 2 && +newData2.ketQua === 2;
      if (isBothPassed) doAnUpdate = await updateDoAn(doAn._id, 7);
    } else {
      if (+newData.ketQua === 2) doAnUpdate = await updateDoAn(doAn._id, 7);
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
    onError: (error) => {
      toast.error("Chấm điểm không thành công", error.message);
    },
  });

  // Handle form submission
  const onSubmit = (data) => {
    let newData, newData2;

    newData = chamDiemHoiDong(data, doAn, tieuChi, true);
    if (doAn.sinhVien2) newData2 = chamDiemHoiDong(data, doAn, tieuChi, false);
    chamDiemMutate({ newData, newData2 });
  };
  const diemSV1Abet =
    doAn.sinhVien1Info.diem.diemHoiDong?.[`diemHoiDong${doAn.stt}`]?.diemAbet;
  const diemSV1Tong =
    doAn.sinhVien1Info.diem.diemHoiDong?.[`diemHoiDong${doAn.stt}`]?.diemTong;
  const diemSV2Abet =
    doAn.sinhVien2Info?.diem.diemHoiDong?.[`diemHoiDong${doAn.stt}`]?.diemAbet;
  const diemSV2Tong =
    doAn.sinhVien2Info?.diem.diemHoiDong?.[`diemHoiDong${doAn.stt}`]?.diemTong;
  return (
    <Modal size="xl">
      <Modal.Header onClick={() => setShowModal(false)}>
        <h5>Chấm điểm sinh viên</h5>
      </Modal.Header>
      {tieuChiLoading ? (
        <div>
          <LoadingSpinner />
        </div>
      ) : (
        <Modal.Body className="p-0 m-0">
          <p>
            <strong>Sinh viên {doAn.sinhVien2 ? "1" : ""}:</strong>{" "}
            {doAn.sinhVien1.hoTen}
          </p>
          {doAn.sinhVien2 && (
            <p>
              <strong>Sinh viên 2:</strong> {doAn.sinhVien2.hoTen}
            </p>
          )}
          <StyledForm className="mt-2" onSubmit={handleSubmit(onSubmit)}>
            <StyledTable headvariation="dark">
              <thead>
                <tr>
                  <th rowSpan={countSinhVien}>STT</th>
                  <th rowSpan={countSinhVien} width="40%">
                    LO
                  </th>
                  <th
                    colSpan={countSinhVien}
                    className="text-center"
                    width="40%"
                  >
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
                        register={{
                          ...register(`sv1_Lo${index}`, {
                            required: "Vui lòng nhập điểm",
                            validate: (value) =>
                              (value > 0 && value <= 4) ||
                              "Điểm phải lớn hơn 0 và nhỏ hơn 4",
                          }),
                        }}
                        className={`${
                          errors[`sv1_Lo${index}`] ? "error" : ""
                        } text-center`}
                        min={0}
                        max={10}
                        step={1}
                        placeholder="Nhập điểm abet"
                        disabled={!chamDiem}
                        value={diemSV1Abet[index]?.diem}
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
                            placeholder="Nhập điểm abet"
                            register={{
                              ...register(`sv2_Lo${index}`, {
                                required: "Vui lòng nhập điểm",
                                validate: (value) =>
                                  (value > 0 && value <= 4) ||
                                  "Điểm phải lớn hơn 0 và nhỏ hơn 4",
                              }),
                            }}
                            className={`${
                              errors[`sv2_Lo${index}`] ? "error" : ""
                            } text-center`}
                            min={0}
                            max={10}
                            step={1}
                            disabled={!chamDiem}
                            defaultValue={diemSV2Abet[index]?.diem}
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
                      register={{
                        ...register(`sv1_d10`, {
                          required: "Vui lòng nhập điểm",
                          validate: (value) =>
                            (value >= 0 && value <= 10) ||
                            "Điểm phải lớn hơn 0 và nhỏ hơn 10",
                        }),
                      }}
                      className={`${
                        errors[`sv1_d10`] ? "error" : ""
                      } text-center`}
                      min={0}
                      max={10}
                      step={1}
                      disabled={!chamDiem}
                      value={diemSV1Tong}
                    />
                    {errors[`sv1_d10`] && (
                      <p className="error-text">{errors[`sv1_d10`].message}</p>
                    )}
                  </td>
                  {doAn.sinhVien2 &&
                    Object.values(doAn.sinhVien2).length > 0 && (
                      <td>
                        <StyledInput
                          type="number"
                          placeholder="Thang điểm 10"
                          register={{
                            ...register(`sv2_d10`, {
                              required: "Vui lòng nhập điểm",
                              validate: (value) =>
                                (value >= 0 && value <= 10) ||
                                "Điểm phải lớn hơn 0 và nhỏ hơn 10",
                            }),
                          }}
                          className={`${
                            errors[`sv2_d10`] ? "error" : ""
                          } text-center`}
                          min={0}
                          max={10}
                          step={1}
                          disabled={!chamDiem}
                          value={diemSV2Tong}
                        />
                        {errors[`sv2_d10`] && (
                          <p className="error-text">
                            {errors[`sv2_d10`].message}
                          </p>
                        )}
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
      )}
    </Modal>
  );
}

export default ModalChamDiemHoiDong;
