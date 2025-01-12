import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { BsFileExcel } from "react-icons/bs";
import { themNhieuSinhVienAdmin } from "../../services/User";
import toast from "react-hot-toast";
import Button from "../../ui/Button";
import { StyledInput } from "../../ui/Input";

function ThemSinhVienExcel({ refetch, setIsPending }) {
  const inputFile = useRef();
  const [excelFile, setExcelFile] = useState(null);

  const handleChooseFile = () => {
    inputFile.current.click();
    inputFile.current.value = null;
  };

  const { mutate: themNhieuMutate } = useMutation({
    mutationFn: themNhieuSinhVienAdmin,
    onMutate: () => {
      setIsPending(true);
    },
    onSuccess: () => {
      toast.success("Thêm sinh viên thành công");
      setIsPending(false);
      refetch();
    },
    onError: (error) => {
      toast.error(`Thêm sinh viên thất bại: ${error.message}`);
      setIsPending(false);
    },
  });

  function handleFileUpload(e) {
    setExcelFile(e.target.files[0]);
  }

  useEffect(() => {
    if (!excelFile) return;

    const formData = new FormData();
    formData.append("taiLieu", excelFile);

    themNhieuMutate(formData); // Sending the file using FormData
  }, [excelFile, themNhieuMutate]);

  return (
    <div>
      <Button
        className="mt-3"
        bgcolor="bg-green-600"
        onClick={handleChooseFile}
      >
        <StyledInput
          hidden="true"
          type="file"
          onChange={handleFileUpload}
          ref={inputFile}
        />
        <span>
          <BsFileExcel />
        </span>
        Tải thông tin sinh viên
      </Button>
    </div>
  );
}

export default ThemSinhVienExcel;
