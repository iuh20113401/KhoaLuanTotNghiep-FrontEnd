import { useMutation, useQuery } from "@tanstack/react-query";
import {
  layDanhSachBieuMauChung,
  uploadBieuMau,
} from "../../../services/BieuMauChung";
import ChiTietBieuMau from "./ChiTietBieuMau";
import StyledTable from "../../../ui/Table";
import Button from "../../../ui/Button";
import Card from "../../../ui/Card";
import { HiOutlineUpload } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

function BieuMauContainer() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["DanhSachBieuMauChung"],
    queryFn: layDanhSachBieuMauChung,
  });
  const DanhSachBieuMau = data?.danhSachBieuMau;
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
    formData.append("loai", 0);
    uploadMutate(formData);
  }, [selectedFile, uploadMutate]);
  return (
    !isLoading && (
      <Card className="p-3 mt-3">
        <div>
          <Button
            type="normal"
            variation="outline"
            bgcolor="var(--bs-blue)"
            color="var(--bs-blue)"
            onClick={handleAddFile}
            disabled={isPending}
          >
            <span>
              <HiOutlineUpload />
            </span>
            Upload biểu mẩu{" "}
          </Button>
          <input
            style={{ display: "none" }}
            type="file"
            ref={inputref}
            onChange={handleFileChange}
          />
        </div>
        <StyledTable>
          <tbody>
            {DanhSachBieuMau.map((bm) => (
              <ChiTietBieuMau bieuMau={bm} key={bm._id} />
            ))}
          </tbody>
        </StyledTable>
      </Card>
    )
  );
}

export default BieuMauContainer;
