import { useForm } from "react-hook-form";
import CanvaContainer from "../../../ui/Canvas";
import StyledForm from "../../../ui/Form";
import { StyledInput } from "../../../ui/Input";
import Button from "../../../ui/Button";
import { useMutation } from "@tanstack/react-query";
import { taoLichHop } from "../../../services/LichHop";
import toast from "react-hot-toast";
import UseUser from "../../../context/UseUser";

function TaoLichHopCanvas({ setShowCanvas, refetch }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { mutate, isPending } = useMutation({
    mutationFn: taoLichHop,
    onSuccess: () => {
      toast.success("Tạo lịch họp thành công");
      refetch();
      setShowCanvas(false);
    },
    onError: () => {
      toast.error("Tạo lịch họp không thành công");
      refetch();
    },
  });
  const batDau = watch("batDau");
  const { data: user } = UseUser();
  function onSubmit(data) {
    data.giangVien = user.user._id;
    console.log(data);
    mutate(data);
  }

  return (
    <div>
      <CanvaContainer
        title={"Tạo mã điểm danh"}
        onClick={() => setShowCanvas(false)}
      >
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="tieuDe">Tiêu đề </label>
            <StyledInput
              type="text"
              placeholder="Nhập tiêu đề buổi họp"
              register={{
                ...register("tieuDe", { required: "Tiêu đề là bắt buộc" }),
              }}
            />
            {errors.tieuDe && <p className="error">{errors.tieuDe.message}</p>}
          </div>

          <div>
            <label>Địa điểm</label>
            <StyledInput
              type="text"
              placeholder="Nhập địa điểm buổi họp"
              register={{
                ...register("phong", { required: "Địa điểm là bắt buộc" }),
              }}
            />
            {errors.diaDiem && (
              <p className="error">{errors.diaDiem.message}</p>
            )}
          </div>

          <div>
            <label>Thời gian bắt đầu</label>
            <StyledInput
              type="datetime-local"
              register={{
                ...register("batDau", {
                  required: "Thời gian bắt đầu là bắt buộc",
                }),
              }}
            />
            {errors.batDau && <p className="error">{errors.batDau.message}</p>}
          </div>

          <div>
            <label>Thời gian kết thúc</label>
            <StyledInput
              type="datetime-local"
              register={{
                ...register("ketThuc", {
                  required: "Thời gian kết thúc là bắt buộc",
                  validate: (value) =>
                    new Date(value) > new Date(batDau) ||
                    "Thời gian kết thúc phải lớn hơn thời gian bắt đầu",
                }),
              }}
            />
            {errors.ketThuc && (
              <p className="error">{errors.ketThuc.message}</p>
            )}
          </div>

          <div className="text-end">
            <Button type="submit" disabled={isPending}>
              Tạo lịch họp
            </Button>
          </div>
        </StyledForm>
      </CanvaContainer>
    </div>
  );
}

export default TaoLichHopCanvas;
