import { TiMessageTyping } from "react-icons/ti";
import Button from "../../../ui/Button";
import { HiOutlineUpload } from "react-icons/hi";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  layKeHoachThucHien,
  themBangKeHoachThucHien,
  themHinhAnhKeHoachThucHien,
} from "../../../services/ThongBao";
import toast from "react-hot-toast";
import { useEffect, useRef, useState } from "react";
import Editor from "./KeHoachThucHienTable";
const SERVER = import.meta.env.PROD
  ? import.meta.env.VITE_SERVER_URL
  : import.meta.env.VITE_SERVER_URL_LOCAL;
function KeHoachThucHien({ vaiTro }) {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["KeHoachThucHien"],
    queryFn: layKeHoachThucHien,
  });
  const keHoach = data?.thongBao;
  const inputref = useRef();
  const [selectedFile, setSelectedFile] = useState();
  const { mutate: themHinhAnhMutate, isPending: hinhAnhPending } = useMutation({
    mutationFn: themHinhAnhKeHoachThucHien,
    onSuccess: () => {
      toast.success("Thêm kế hoạch thành cồng!");
      refetch();
    },
    onError: () => {
      toast.error("Thêm kế hoạch không thành công");
    },
  });
  const { mutate: themBangKeHoachMutate, isPending: bangPending } = useMutation(
    {
      mutationFn: themBangKeHoachThucHien,
      onSuccess: () => {
        toast.success("Thêm kế hoạch thành cồng!");
        refetch();
      },
      onError: () => {
        toast.error("Thêm kế hoạch không thành công");
      },
    }
  );
  function handleAddFile() {
    inputref.current.click();
    inputref.current.value = null;
  }
  function handleFileChange(e) {
    setSelectedFile(e.target.files[0]);
  }
  useEffect(() => {
    if (!selectedFile) {
      return;
    }
    const formData = new FormData();
    formData.append("hinhAnh", selectedFile);
    formData.append("loai", 0);
    formData.append("hinhThuc", 1);
    themHinhAnhMutate(formData);
  }, [selectedFile, themHinhAnhMutate]);
  return (
    !isLoading && (
      <>
        {+vaiTro === 2 && (
          <div>
            <Button
              type="normal"
              variation="outline"
              bgcolor="var(--bs-blue)"
              color="var(--bs-blue)"
              onClick={handleAddFile}
            >
              <span>
                <HiOutlineUpload />
              </span>
              Upload hình ảnh
            </Button>
            <input
              type="file"
              style={{ display: "none" }}
              ref={inputref}
              onChange={handleFileChange}
            />
            <Button
              type="normal"
              variation="outline"
              bgcolor="var(--bs-blue)"
              color="var(--bs-blue)"
              className="ml-3"
            >
              <span>
                <TiMessageTyping />
              </span>
              Nhập văn bản
            </Button>
          </div>
        )}
        <Editor />
        <div className="mt-3">
          {+keHoach.hinhThuc === 1 ? (
            <>
              <img
                crossorigin="anonymous | use-credentials"
                src={`${SERVER}${keHoach.noiDung}`}
                alt="hinhAnh"
                width="100%"
                height="1000px"
              />
            </>
          ) : (
            <></>
          )}
        </div>
      </>
    )
  );
}

export default KeHoachThucHien;
