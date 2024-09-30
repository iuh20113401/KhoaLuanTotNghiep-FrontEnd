import { useMutation, useQuery } from "@tanstack/react-query";
import {
  layDanhSachBieuMau,
  uploadBieuMau,
} from "../../../services/BieuMauChung";
import UseUser from "../../../context/UseUser";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Button from "../../../ui/Button";
import { HiUpload } from "react-icons/hi";
import DanhSachBieuMau from "./DanhSachBieuMau";

function BieuMauChung() {
  const { data: user, isLoading: userLoading } = UseUser();

  const {
    data: BieuMauData,
    isLoading: BieuMauLoading,
    refetch,
  } = useQuery({
    queryKey: ["DanhSachBieuMau"],
    queryFn: () => layDanhSachBieuMau(user.user._id),
    enabled: !userLoading,
  });
  const inputref = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const { mutate: uploadMutate, isPending } = useMutation({
    mutationFn: uploadBieuMau,
    onSuccess: () => {
      toast.success("Upload biểu mẫu thành công");
      setSelectedFile(null);
      refetch();
    },
  });
  function handleAddFile() {
    inputref.current.click();
  }
  function handleFileChange(e) {
    setSelectedFile(e.target.files[0]);
  }
  useEffect(() => {
    if (!selectedFile) {
      return;
    }
    const formData = new FormData();
    formData.append("taiLieu", selectedFile);
    formData.append("loai", 1);
    uploadMutate(formData);
  }, [selectedFile, uploadMutate]);
  return (
    <div>
      <div className="flex space-between align-center">
        <h6>Biểu mẫu chung</h6>
        <Button
          type="normal"
          variation="outline"
          bgcolor="var(--bs-blue)"
          color="var(--bs-blue)"
          onClick={handleAddFile}
          disabled={isPending}
        >
          <span>
            <HiUpload />
          </span>
          Tải tài liệu lên
        </Button>
        <input
          style={{ display: "none" }}
          type="file"
          ref={inputref}
          onChange={handleFileChange}
        />
      </div>
      {!BieuMauLoading && (
        <DanhSachBieuMau DanhSachBieuMau={BieuMauData.danhSachBieuMau} />
      )}
    </div>
  );
}

export default BieuMauChung;
