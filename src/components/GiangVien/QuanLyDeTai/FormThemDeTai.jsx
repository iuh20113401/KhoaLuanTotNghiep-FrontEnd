import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../../../ui/Button";
import StyledForm from "../../../ui/Form";
import { StyledInput, StyledSelect } from "../../../ui/Input";
import { layDanhMuc, suaDeTai, taoDeTai } from "../../../services/DeTaiApi";
import decodeHtml from "../../../utils/ChangeHtmlCode";
import LoadingSpinner from "../../../ui/Spinner";
import UseUser from "../../../context/UseUser";

function FormThemDeTai({
  deTai = null,
  danhSachGiangVien,
  isSinhVien = false,
  refetch,
}) {
  const { data, isLoading } = useQuery({
    queryKey: ["danhSachDanhMuc"],
    queryFn: layDanhMuc,
  });
  const danhSachDanhMuc = data?.danhMuc;
  const [danhMuc, setDanhMuc] = useState(deTai?.danhMuc || "");
  const [giangVienId, setGiangVienId] = useState(null);

  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });
  const { data: user, isLoading: useLoading } = UseUser();
  const userId = user.user._id;
  const { mutate: suaMutate, isPending: suaLoading } = useMutation({
    mutationFn: suaDeTai,
    onSuccess: () => {
      toast.success("Sửa đề tài thành công");
      reset();
      if (refetch) refetch();
    },
    onError: (error) => {
      toast.error("Có lỗi xảy ra khi sửa đề tài");
    },
  });
  const { mutate: taoMutate, isPending: themLoading } = useMutation({
    mutationFn: taoDeTai,
    onSuccess: () => {
      toast.success("Tạo đề tài thành công");
      reset();
      if (refetch) refetch();
    },
    onError: () => {
      toast.error("Có lỗi xảy ra khi tạo đề tài");
    },
  });

  function onSubmit(data) {
    if (danhMuc === "Khác" && data.danhMuc === "") {
      return null;
    }
    deTai !== null
      ? suaMutate({
          ...deTai,
          ...data,
          danhMuc: danhMuc === "Khác" ? data.danhMuc : danhMuc,
        })
      : taoMutate({
          ...data,
          danhMuc: danhMuc === "Khác" ? data.danhMuc : danhMuc,
          giangVien: isSinhVien ? giangVienId : userId,
          sinhVien: isSinhVien ? userId : null,
          trangThai: isSinhVien ? 4 : 0,
        });
  }
  const isPending = themLoading || suaLoading;
  if (isPending)
    return (
      <div className="h-100">
        <LoadingSpinner />
      </div>
    );
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-3">
        <label htmlFor="tendetai">
          <h6>Tên đề tài</h6>
        </label>
        <StyledInput
          type="text"
          id="tendetai"
          placeholder="Nhập tên đề tài ..."
          {...register("tenDeTai", { required: "Tên đề tài là bắt buộc" })}
          defaultValue={deTai?.tenDeTai || ""}
        />
        {errors.tenDeTai && (
          <p className="text-danger error">{errors.tenDeTai.message}</p>
        )}
      </div>
      {isSinhVien && (
        <div>
          <label htmlFor="danhMuc">
            <h6>Giảng viên</h6>
          </label>{" "}
          <StyledSelect
            value={giangVienId}
            onChange={(e) => setGiangVienId(e.target.value)}
          >
            <option value="">Chọn giảng viên</option>

            {!isLoading &&
              danhSachGiangVien?.map((gv) => (
                <option key={gv._id} value={gv._id}>
                  {gv.hoTen}
                </option>
              ))}
          </StyledSelect>
        </div>
      )}
      <div className="mt-3">
        <label htmlFor="danhMuc">
          <h6>Danh mục</h6>
        </label>
        <StyledSelect
          value={danhMuc}
          onChange={(e) => setDanhMuc(e.target.value)}
        >
          <option value="">Chọn danh mục đề tài</option>
          <option value="ERP">ERP</option>
          <option value="Ứng dụng thực tế">Ứng dụng thực tế</option>
          <option value="Nghiên cứu">Nghiên cứu</option>
          {!isLoading &&
            danhSachDanhMuc?.map(
              (dm) =>
                ["ERP", "Ứng dụng thực tế", "Nghiên cứu"].includes(dm) || (
                  <option key={dm} value={dm}>
                    {dm}
                  </option>
                )
            )}
          <option value={"Khác"}>Khác</option>
        </StyledSelect>
        {errors.danhMuc && (
          <p className="text-danger error">{errors.danhMuc.message}</p>
        )}

        {danhMuc === "Khác" && (
          <StyledInput
            type="text"
            id="danhMuc"
            placeholder="Nhập danh mục đề tài"
            {...register("danhMuc")}
            defaultValue={deTai?.danhMuc || ""}
            className="mt-1"
          />
        )}
      </div>

      <div className="mt-3">
        <label htmlFor="mota">
          <h6>Mô tả</h6>
        </label>
        <Controller
          name="moTa"
          control={control}
          defaultValue={decodeHtml(deTai?.moTa) || ""}
          render={({ field }) => (
            <ReactQuill
              theme="snow"
              {...field}
              onChange={(content) => field.onChange(content)}
              placeholder="Nhập mô tả"
            />
          )}
        />
      </div>

      <div className="mt-3">
        <label htmlFor="kyNangCanCo">
          <h6>Kỹ năng cần có</h6>
        </label>
        <Controller
          name="kyNangCanCo"
          control={control}
          defaultValue={decodeHtml(deTai?.kyNangCanCo) || ""}
          render={({ field }) => (
            <ReactQuill
              theme="snow"
              {...field}
              onChange={(content) => field.onChange(content)}
              placeholder="Nhập kỹ năng yêu cầu"
            />
          )}
        />
      </div>

      <div className="mt-3">
        <label htmlFor="ketQuaCanDat">
          <h6>Kết quả cần đạt</h6>
        </label>
        <Controller
          name="ketQuaCanDat"
          control={control}
          defaultValue={decodeHtml(deTai?.ketQuaCanDat) || ""}
          render={({ field }) => (
            <ReactQuill
              theme="snow"
              {...field}
              onChange={(content) => field.onChange(content)}
              placeholder="Nhập kết quả cần đạt"
            />
          )}
        />
      </div>

      <Button
        size="block"
        state={isPending ? "disabled" : ""}
        disabled={isPending}
      >
        {deTai !== null ? "Cập nhật đề tài" : "Tạo đề tài"}
      </Button>
    </StyledForm>
  );
}

export default FormThemDeTai;
