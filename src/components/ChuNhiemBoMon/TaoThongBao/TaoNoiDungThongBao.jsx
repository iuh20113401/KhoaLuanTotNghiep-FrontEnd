import { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Card from "../../../ui/Card";
import { Link } from "react-router-dom";
import StyledForm from "../../../ui/Form";
import { StyledInput, StyledSelect } from "../../../ui/Input";
import Button from "../../../ui/Button";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { taoThongBaoMoi, uploadHinhAnh } from "../../../services/ThongBao";
import toast from "react-hot-toast";

const formats = [
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "color",
  "background",
  "script",
  "header",
  "blockquote",
  "code-block",
  "list",
  "bullet",
  "align",
  "link",
  "image",
  "video",
];

function TaoNoiDungThongBao() {
  const [value, setValue] = useState("");
  const quillRef = useRef(null); // Create a reference to store Quill instance

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: taoThongBaoMoi,
    onSuccess: () => {
      toast.success("Tạo thông báo thành công");
      reset();
      setValue("");
    },
    onError: () => {
      toast.error("Tạo thông báo không thành công");
    },
  });
  // Custom image handler for ReactQuill
  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("hinhanh", file);

      try {
        // Upload the image to the server
        const response = await uploadHinhAnh(formData);
        const imgURL = response?.imgPath;

        // Insert the image at the cursor position
        quillRef.insertEmbed(quillRef.getSelection(), "image", imgURL);
      } catch (error) {
        toast.error("Image upload failed", error);
      }
    };
  };
  function onSubmit(data) {
    console.log(value);
    // if (!value || !data.tieuDe) return;
    // const newData = { ...data, noiDung: value };
    // mutate(newData);
  }

  // Quill module settings
  const modules = {
    toolbar: {
      container: [
        [{ font: [] }, { size: [] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script: "sub" }, { script: "super" }],
        [{ header: "1" }, { header: "2" }, "blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ align: [] }],
        ["link", "image", "video"],
        ["clean"],
      ],
      // handlers: {
      //   "image": imageHandler,
      // },
    },
  };

  return (
    <div>
      <div className="mb-3">
        <h5>
          <Link to={"/giangvien/thongbao"}>Thông báo </Link>
          {">"} Tạo thông báo{" "}
        </h5>
      </div>
      <Card className="p-3">
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Tiêu đề thông báo</label>
            <StyledInput
              type="text"
              placeholder="Nhập tiêu đề thông báo"
              {...register("tieuDe")}
            />
          </div>
          <div>
            <label>Thông báo dành cho</label>
            <StyledSelect defaultValue={"0"} {...register("loai")}>
              <option value="0">Toàn bộ</option>
              <option value="1">Giảng viên</option>
              <option value="2">Sinh viên</option>
            </StyledSelect>
          </div>
          <div style={{ height: "300px" }}>
            <label>Nội dung thông báo</label>
            <ReactQuill
              theme="snow"
              ref={quillRef}
              value={value}
              modules={modules}
              onChange={setValue}
              style={{ height: "80%" }}
            />
          </div>
          <div className="text-end mt-3">
            <Button size="block" disabled={isPending}>
              Tạo thông báo
            </Button>
          </div>
        </StyledForm>
      </Card>
    </div>
  );
}

export default TaoNoiDungThongBao;
