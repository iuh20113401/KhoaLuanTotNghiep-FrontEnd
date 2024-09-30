import { useForm } from "react-hook-form";
import Button from "../../../ui/Button";
import StyledForm from "../../../ui/Form";
import { StyledInput, StyledSelect } from "../../../ui/Input";
import { Col3, Col9, StyledRow } from "../../../ui/Row";
import { useMutation } from "@tanstack/react-query";
import { dangKyThucTap } from "../../../services/ThucTap";

function FormDangKy() {
  const {
    register,
    handleSubmit,
    formState: { errors }, // Access the form errors here
  } = useForm();
  const { mutate, isPending } = useMutation({
    mutationFn: dangKyThucTap,
  });

  function onSubmit(data) {
    mutate(data);
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledRow>
        <Col3>
          <label htmlFor="tenCongTy">Tên công ty</label>
        </Col3>
        <Col9>
          <StyledInput
            type="text"
            id="tenCongTy"
            placeholder="IUH ..."
            {...register("tenCongTy", { required: "Tên công ty là bắt buộc" })} // Set required field
          />
          {errors.tenCongTy && (
            <p style={{ color: "red" }}>{errors.tenCongTy.message}</p>
          )}
        </Col9>
      </StyledRow>

      <StyledRow>
        <Col3>
          <label htmlFor="maSoThue">Mã số thuế</label>
        </Col3>
        <Col9>
          <StyledInput
            type="text"
            id="maSoThue"
            placeholder="340343000"
            {...register("maSoThue", { required: "Mã số thuế là bắt buộc" })}
          />
          {errors.maSoThue && (
            <p style={{ color: "red" }}>{errors.maSoThue.message}</p>
          )}
        </Col9>
      </StyledRow>

      <StyledRow>
        <Col3>
          <label htmlFor="diaChiCongTy">Địa chỉ công ty</label>
        </Col3>
        <Col9>
          <StyledInput
            type="text"
            id="diaChiCongTy"
            placeholder="Nhập địa chỉ công ty...."
            {...register("diaChiCongTy", { required: "Địa chỉ là bắt buộc" })}
          />
          {errors.diaChiCongTy && (
            <p style={{ color: "red" }}>{errors.diaChiCongTy.message}</p>
          )}
        </Col9>
      </StyledRow>

      <StyledRow>
        <Col3>
          <label htmlFor="tenNguoiDaiDien">Tên người đại diện</label>
        </Col3>
        <Col9>
          <StyledInput
            type="text"
            id="tenNguoiDaiDien"
            placeholder="Nguyễn Văn A"
            {...register("tenNguoiDaiDien", {
              required: "Tên người đại diện là bắt buộc",
            })}
          />
          {errors.tenNguoiDaiDien && (
            <p style={{ color: "red" }}>{errors.tenNguoiDaiDien.message}</p>
          )}
        </Col9>
      </StyledRow>

      <StyledRow>
        <Col3>
          <label htmlFor="emailCongTy">Email công ty</label>
        </Col3>
        <Col9>
          <StyledInput
            type="email"
            id="emailCongTy"
            placeholder="CongTYA@gmail.com"
            {...register("emailCongTy", {
              required: "Email công ty là bắt buộc",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Email không hợp lệ",
              },
            })}
          />
          {errors.emailCongTy && (
            <p style={{ color: "red" }}>{errors.emailCongTy.message}</p>
          )}
        </Col9>
      </StyledRow>

      <StyledRow>
        <Col3>
          <label htmlFor="tenNguoiGiamSat">Tên người giám sát thực tập</label>
        </Col3>
        <Col9>
          <StyledInput
            type="text"
            id="tenNguoiGiamSat"
            placeholder="Nguyễn Văn B"
            {...register("tenNguoiGiamSat", {
              required: "Tên người giám sát là bắt buộc",
            })}
          />
          {errors.tenNguoiGiamSat && (
            <p style={{ color: "red" }}>{errors.tenNguoiGiamSat.message}</p>
          )}
        </Col9>
      </StyledRow>

      <StyledRow>
        <Col3>
          <label htmlFor="soDienThoaiNguoiGiamSat">
            Số điện thoại người giám sát
          </label>
        </Col3>
        <Col9>
          <StyledInput
            type="text"
            id="soDienThoaiNguoiGiamSat"
            placeholder="032312312..."
            {...register("soDienThoaiNguoiGiamSat", {
              required: "Số điện thoại là bắt buộc",
              pattern: {
                value: /^[0-9]{10,11}$/,
                message: "Số điện thoại không hợp lệ",
              },
            })}
          />
          {errors.soDienThoaiNguoiGiamSat && (
            <p style={{ color: "red" }}>
              {errors.soDienThoaiNguoiGiamSat.message}
            </p>
          )}
        </Col9>
      </StyledRow>

      <StyledRow>
        <Col3>
          <label htmlFor="trangThaiThucTap">Trạng thái</label>
        </Col3>
        <Col9>
          <StyledSelect
            id="trangThaiThucTap"
            {...register("trangThaiThucTap", {
              required: "Trạng thái là bắt buộc",
            })}
          >
            <option value="0">Chờ phỏng vấn</option>
            <option value="1">Đang làm việc</option>
          </StyledSelect>
          {errors.trangThaiThucTap && (
            <p style={{ color: "red" }}>{errors.trangThaiThucTap.message}</p>
          )}
        </Col9>
      </StyledRow>

      <Button type="submit" size="block" disabled={isPending}>
        Đăng ký thực tập
      </Button>
    </StyledForm>
  );
}

export default FormDangKy;
